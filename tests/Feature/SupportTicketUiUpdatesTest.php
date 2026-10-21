<?php

namespace Tests\Feature;

use App\Support\SupportMessageBody;
use Tests\TestCase;

class SupportTicketUiUpdatesTest extends TestCase
{
    public function test_support_show_removes_manage_ticket_keeps_after_sending_and_uses_quill(): void
    {
        $view = file_get_contents(resource_path('views/admin/support/show.blade.php'));
        $controller = file_get_contents(app_path('Http/Controllers/Admin/SupportTicketController.php'));

        $this->assertStringNotContainsString('Manage ticket', $view);
        $this->assertStringNotContainsString('admin.support.update', $view);
        $this->assertStringNotContainsString('admin.support.assign', $view);
        $this->assertStringNotContainsString('name="status"', $view);
        $this->assertStringContainsString('After sending', $view);
        $this->assertStringContainsString('waiting_for_customer', $view);
        $this->assertStringContainsString('in_progress', $view);
        $this->assertStringContainsString('resolved', $view);
        $this->assertStringContainsString('supportReplyQuill', $view);
        $this->assertStringContainsString('quill@1.3.7', $view);
        $this->assertStringContainsString("['bold', 'italic', 'underline']", $view);
        $this->assertStringContainsString("['link']", $view);
        $this->assertStringContainsString('SupportMessageBody::render', $view);
        $this->assertStringContainsString("view('admin.support.show'", $controller);
        $this->assertStringContainsString("\$ticket->load('messages.attachments')", $controller);
        // Manage Ticket data is no longer passed into the show view.
        $showMethod = $this->extractMethodBody($controller, 'show');
        $this->assertStringNotContainsString('hqUsers', $showMethod);
        $this->assertStringNotContainsString('statuses', $showMethod);
    }

    private function extractMethodBody(string $source, string $method): string
    {
        $pattern = '/public function '.preg_quote($method, '/').'\(SupportTicket \$ticket\)\s*\{/';
        if (!preg_match($pattern, $source, $match, PREG_OFFSET_CAPTURE)) {
            $this->fail("Method {$method} not found");
        }
        $start = $match[0][1] + strlen($match[0][0]);
        $depth = 1;
        $length = strlen($source);
        for ($i = $start; $i < $length; $i++) {
            $char = $source[$i];
            if ($char === '{') {
                $depth++;
            } elseif ($char === '}') {
                $depth--;
                if ($depth === 0) {
                    return substr($source, $start, $i - $start);
                }
            }
        }

        $this->fail("Could not parse method {$method}");
    }

    public function test_support_message_body_strips_unsafe_html(): void
    {
        $html = SupportMessageBody::render('<p onclick="alert(1)">Safe <em>text</em><img src=x onerror=alert(1)></p>');
        $this->assertStringContainsString('<em>text</em>', $html);
        $this->assertStringNotContainsString('onclick', $html);
        $this->assertStringNotContainsString('<img', $html);
    }

    public function test_hq_support_replies_cc_info_and_set_reply_to(): void
    {
        $controller = file_get_contents(app_path('Http/Controllers/Admin/SupportTicketController.php'));
        $config = file_get_contents(config_path('support.php'));
        $app = file_get_contents(config_path('app.php'));
        $model = file_get_contents(app_path('Models/SupportTicket.php'));

        $this->assertStringContainsString('SupportMail::applyCc', $controller);
        $this->assertStringContainsString('SupportMail::applyReplyTo', $controller);
        $this->assertStringContainsString("env('SUPPORT_CC_EMAIL', 'info@taskgo.ie')", $config);
        $this->assertStringContainsString('inboundReplyAddress', $model);
        $this->assertStringContainsString("orderBy('id')", $model);
        $this->assertStringContainsString("env('APP_TIMEZONE', 'Europe/Dublin')", $app);
    }
}
