//--my first playwright spec file -----//
import { test, expect } from '@playwright/test';

test('testcase1', async ({page}) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle(/Google/);
    await page.waitForTimeout(3000);  
})

