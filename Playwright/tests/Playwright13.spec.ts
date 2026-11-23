//recorded using codegen

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://blazedemo.com/');
  await page.locator('select[name="fromPort"]').selectOption('Philadelphia');
  await page.locator('select[name="toPort"]').selectOption('London');
  await page.getByRole('button', { name: 'Find Flights' }).click();
  await page.getByRole('heading', { name: 'Flights from Philadelphia to' }).click();
  await expect(page.getByRole('heading', { name: 'Flights from Philadelphia to' })).toBeVisible();
 


  //POM
  
});