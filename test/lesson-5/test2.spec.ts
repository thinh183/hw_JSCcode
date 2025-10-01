import { test, expect } from '@playwright/test';
test('Product Page - thêm sản phẩm vào giỏ hàng', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click('text=Bài học 2: Product page');
    //
    await test.step('Add product 1:2 iteams', async () => {
        await page.locator('//button[data-product-id="1"]').dblclick();
    })
     await test.step('Add product 2:3 iteams', async () => {
        await page.locator('//button[data-product-id="2"]').click({clickCount:3});
    });
    await test.step('Add product 3:1 iteams', async () => {
        await page.locator('//button[data-product-id="1"]').click();
    
    })
})