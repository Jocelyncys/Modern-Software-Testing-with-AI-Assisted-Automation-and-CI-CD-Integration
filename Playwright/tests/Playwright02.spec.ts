//--validating textbox exisitence & its visibility on the page-----//
import { test, expect } from '@playwright/test';

test('testcase2', async ({page}) => {
    await page.goto("https://www.google.com/");
    let textBox = await page.locator('css=#APjFqb');
    await textbox.highlight()
    await expect(textBox).toBeEnabled()
    await expect(textBox).toBeVisible()
    await expect(textBox).toHaveCount(1)
    await page.waitForTimeout(3000);  
})

