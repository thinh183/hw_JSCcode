1.
import { test } from '@playwright/test';
const date='2003-08-03'
const country='Việt Nam'
test('Register Page - điền đầy đủ thông tin và đăng ký', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click('	Bài học 1: Register Page (có đủ các element)');
    await page.fill('#username', 'testuser');
    await page.fill('#email', 'testuser@example.com');
    await page.fill('#password', '123456');
    await page.fill('#confirmPassword', '123456');
    await page.fill('#date','2003-03-18')
}
)

