<?php

namespace Tests\Feature;

use Tests\TestCase;

class RxUserHardDeleteUiTest extends TestCase
{
    public function test_rx_user_hard_delete_is_feature_flagged_and_cascades_orders_appointments(): void
    {
        $features = file_get_contents(config_path('features.php'));
        $controller = file_get_contents(app_path('Http/Controllers/Api/RxUserController.php'));
        $service = file_get_contents(app_path('Services/RxUserHardDeleteService.php'));
        $routes = file_get_contents(base_path('routes/web.php'));
        $view = file_get_contents(resource_path('views/rx-user-view.blade.php'));

        $this->assertStringContainsString("'rx_user_hard_delete' => env('HQ_RX_USER_HARD_DELETE_ENABLED', false)", $features);
        $this->assertStringContainsString('abort_unless((bool) config(\'features.rx_user_hard_delete\', false), 404)', $controller);
        $this->assertStringContainsString('function destroy(int $id, RxUserHardDeleteService $hardDelete)', $controller);
        $this->assertStringContainsString('function deletePreview(int $id, RxUserHardDeleteService $hardDelete)', $controller);
        $this->assertStringContainsString("Route::delete('/{id}'", $routes);
        $this->assertStringContainsString('api.rx-users.destroy', $routes);
        $this->assertStringContainsString("Route::get('/{id}/delete-preview'", $routes);
        $this->assertStringContainsString('api.rx-users.delete-preview', $routes);

        $this->assertStringContainsString('function preview(int $userId): array', $service);
        $this->assertStringContainsString("DB::table('order_medicines')", $service);
        $this->assertStringContainsString("DB::table('rx_orders')->where('user_id', \$userId)->delete()", $service);
        $this->assertStringContainsString("DB::table('appointments')->where('user_id', \$userId)->delete()", $service);
        $this->assertStringContainsString("DB::table('rx_users')->where('id', \$userId)->delete()", $service);

        $this->assertStringContainsString("config('features.rx_user_hard_delete')", $view);
        $this->assertStringContainsString('id="rxUserHardDeleteBtn"', $view);
        $this->assertStringContainsString('id="rxUserHardDeleteConfirmBtn"', $view);
        $this->assertStringContainsString('id="rxUserHardDeletePreviewContent"', $view);
        $this->assertStringContainsString('id="rxUserHardDeleteCopyBtn"', $view);
        $this->assertStringContainsString('copyHardDeletePreview()', $view);
        $this->assertStringContainsString('formatHardDeletePreviewText(', $view);
        $this->assertStringContainsString('loadHardDeletePreview()', $view);
        $this->assertStringContainsString('/delete-preview', $view);
        $this->assertStringContainsString('hardDeletePatient()', $view);
        $this->assertStringContainsString("method: 'DELETE'", $view);
    }
}
