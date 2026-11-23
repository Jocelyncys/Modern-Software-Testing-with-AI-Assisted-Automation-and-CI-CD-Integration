//--validating textbox exisitence & its visibility on the page-----//
import { test, expect } from '@playwright/test';

test('testcase3', async ({page}) => {
    await page.goto("https://amazon.com/");
    await page.locator('#searchDropdownBox')
    //.selectOption('label: Electronics');
    .selectOption({ label: 'Computers' });
    await page.locator('#twotabsearchtextbox').fill('hp laptop');
    await page.locator('#nav-search-submit-button').click();

    await page.waitForTimeout(3000);  

    await page.screenshot({ path: 'amazonresult.png' });
})

