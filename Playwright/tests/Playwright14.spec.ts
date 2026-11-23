//using POM

import { test, expect } from '@playwright/test';
import HomePagePOM from '../pages/BlazeDemoHomepagePOM';
import ResultPagePOM from '../pages/BlazeDemoResultpagePOM';
import PurchasePagePOM from '../pages/BlazeDemoPurchasepagePOM';
import ConfirmationPagePOM from '../pages/BlazeDemoConfirmationpagePOM';

test('testcase14', async ({ page }) => {
  await page.goto('https://blazedemo.com/');

  const homePage = new HomePagePOM(page);
  await page.pause()
  
  await expect(homePage.getFindFlightsButton()).toBeVisible();
  await homePage.getFromCityListBox().selectOption('Philadelphia');
  await homePage.getToCityListBox().selectOption('London');
  await homePage.getFindFlightsButton().click();

  const resultPage = new ResultPagePOM(page);
  await resultPage.getFlightButton(1).click();
  
  await page.waitForTimeout(2000); // Wait for 2 seconds to allow the page to load  

  const purchasePage = new PurchasePagePOM(page);
  await expect(purchasePage.getPurchaseFlightButton()).toBeVisible();
  await purchasePage.getPassengerNameTextBox().fill('John Doe');
  await purchasePage.getAddressTextBox().fill('123 Main St');
  await purchasePage.getCityTextBox().fill('New York');
  await purchasePage.getStateTextBox().fill('NY');
  await purchasePage.getZipCodeTextBox().fill('10001');
  await purchasePage.getCardTypeDropDown().selectOption('visa');
  await purchasePage.getCreditCardNumberTextBox().fill('4111111111111111');
  await purchasePage.getCreditCardMonthTextBox().fill('12');
  await purchasePage.getCreditCardYearTextBox().fill('2025');
  await purchasePage.getNameOnCardTextBox().fill('John Doe');
  await purchasePage.getRememberMeCheckBox().check();
  await purchasePage.getPurchaseFlightButton().click();

  await page.waitForTimeout(2000); // Wait for 2 seconds to allow the page to load

  const confirmationPage = new ConfirmationPagePOM(page);
  await expect(confirmationPage.getConfirmationHeading()).toBeVisible();
  await expect(confirmationPage.getConfirmationTable()).toBeVisible();
  await expect(confirmationPage.getConfirmationJsonBlock()).toBeVisible();

  await page.waitForTimeout(2000); // Wait for 2 seconds to allow the page to load

  

  
});