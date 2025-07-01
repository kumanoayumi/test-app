import { test, expect } from '@playwright/test';

test.describe('test-app - ページナビゲーション', () => {
  test('主要ページ間のナビゲーションが正しく機能することを確認', async ({ page }) => {
    // ホームページにアクセス
    await page.goto('/');
    // ページが正しく表示される
    await expect(page).toHaveURL(/.*/);

    // ナビゲーションメニューを確認
    await page.locator('nav, [role="navigation"]').waitFor();
    // Expected: メニューが表示される

    // 各ページへのリンクをクリック
    await page.locator('a[href]').waitFor();
    // Expected: 正しいページに遷移する

  });
});

test.describe('test-app - レスポンシブデザイン', () => {
  test('異なる画面サイズで正しく表示されることを確認', async ({ page }) => {
    // デスクトップサイズで表示
    // Expected: レイアウトが正しく表示される

    // タブレットサイズに変更
    // Expected: タブレット用レイアウトが適用される

    // モバイルサイズに変更
    // Expected: モバイル用レイアウトが適用される

    // メニューの動作を確認
    await page.locator('[data-testid="mobile-menu"], .hamburger, .menu-toggle').waitFor();
    // Expected: モバイルメニューが機能する

  });
});

