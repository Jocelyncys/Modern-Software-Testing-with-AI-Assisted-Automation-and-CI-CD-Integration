//--interacing with inside the frame-----//
import { test, expect } from '@playwright/test';

test('testcase6', async ({page}) => {
    await page.goto("https://jqueryui.com/spinner/");
    await page.waitForTimeout(3000);

    const frame = await page.frameLocator('.demo-frame');
    await frame.locator('.ui-spinner-up').click();
    await page.waitForTimeout(3000);
    await expect(frame.locator('#spinner')).toHaveAttribute("aria-valuenow", "1");

})

