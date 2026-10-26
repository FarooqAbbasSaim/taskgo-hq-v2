<?php

namespace App\Support;

use Illuminate\Mail\Message;

class SupportMail
{
    public static function applyCc(Message $mail, ?string $primaryTo = null): void
    {
        $cc = trim((string) config('support.cc_email'));
        if ($cc === '') {
            return;
        }
        if ($primaryTo && strcasecmp($cc, $primaryTo) === 0) {
            return;
        }
        $mail->cc($cc);
    }

    public static function applyReplyTo(Message $mail, ?string $address, string $name = 'Taskgo Support'): void
    {
        if (!$address) {
            return;
        }
        $mail->replyTo($address, $name);
    }
}
