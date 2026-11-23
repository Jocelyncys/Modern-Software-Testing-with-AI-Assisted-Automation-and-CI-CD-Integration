import { test, expect } from '@playwright/test';

const testData = {
	baseUrl: 'https://blazedemo.com/',
	titles: {
		home: /BlazeDemo/i,
		reserve: /BlazeDemo\s*-\s*reserve/i,
		purchase: /BlazeDemo\s*Purchase/i,
	},
	headings: {
		home: 'Welcome to the Simple Travel Agency!',
		reserve: 'Flights from Boston to London:',
		purchase: /has been reserved\./i,
		confirmation: 'Thank you for your purchase today!',
	},
	dropdowns: {
		fromPort: {
			selector: 'select[name="fromPort"]',
			defaultValue: 'Paris',
			selectedValue: 'Boston',
			itemCount: 7,
		},
		toPort: {
			selector: 'select[name="toPort"]',
			defaultValue: 'Buenos Aires',
			selectedValue: 'London',
			itemCount: 7,
		},
	},
	buttons: {
		findFlights: 'Find Flights',
		chooseFlight: 'Choose This Flight',
		purchaseFlight: 'Purchase Flight',
	},
	urlChecks: {
		reserve: /reserve\.php/,
		purchase: /purchase\.php/,
		confirmation: /confirmation\.php/,
	},
	form: {
		inputName: 'John Doe',
		address: '123 Main Street',
		city: 'Boston',
		state: 'MA',
		zipCode: '02108',
		cardType: 'visa',
		creditCardNumber: '4111111111111111',
		creditCardMonth: '12',
		creditCardYear: '2028',
		nameOnCard: 'John Doe',
	},
	confirmation: {
		status: /PendingCapture/i,
		idLabel: 'Id',
		statusLabel: 'Status',
		amountLabel: 'Amount',
	},
};

test('search flights from Boston to London on BlazeDemo', async ({ page }) => {
	await page.goto(testData.baseUrl);
	await expect(page).toHaveTitle(testData.titles.home);

	await expect(page.getByRole('heading', { name: testData.headings.home })).toBeVisible();
	await expect(page.locator(`${testData.dropdowns.fromPort.selector} option`)).toHaveCount(testData.dropdowns.fromPort.itemCount);
	await expect(page.locator(`${testData.dropdowns.toPort.selector} option`)).toHaveCount(testData.dropdowns.toPort.itemCount);
	await expect(page.locator(testData.dropdowns.fromPort.selector)).toHaveValue(testData.dropdowns.fromPort.defaultValue);
	await expect(page.locator(testData.dropdowns.toPort.selector)).toHaveValue(testData.dropdowns.toPort.defaultValue);

	await page.selectOption(testData.dropdowns.fromPort.selector, testData.dropdowns.fromPort.selectedValue);
	await page.selectOption(testData.dropdowns.toPort.selector, testData.dropdowns.toPort.selectedValue);

	await page.getByRole('button', { name: testData.buttons.findFlights }).click();

	await expect(page).toHaveURL(testData.urlChecks.reserve);
	await expect(page).toHaveTitle(testData.titles.reserve);
	await expect(page.getByRole('heading', { name: testData.headings.reserve })).toBeVisible();

	const resultRows = page.locator('table tbody tr');
	await expect(resultRows.first()).toBeVisible();
	await expect(await resultRows.count()).toBeGreaterThan(0);

	const firstFlightPriceText = (await resultRows.first().locator('td').nth(5).innerText()).trim();
	const expectedAmount = firstFlightPriceText.replace('$', '').trim();

	await resultRows.first().getByRole('button', { name: testData.buttons.chooseFlight }).click();

	await expect(page).toHaveURL(testData.urlChecks.purchase);
	await expect(page).toHaveTitle(testData.titles.purchase);
	await expect(page.getByRole('heading')).toHaveText(testData.headings.purchase);

	await page.fill('input[name="inputName"]', testData.form.inputName);
	await page.fill('input[name="address"]', testData.form.address);
	await page.fill('input[name="city"]', testData.form.city);
	await page.fill('input[name="state"]', testData.form.state);
	await page.fill('input[name="zipCode"]', testData.form.zipCode);
	await page.selectOption('select[name="cardType"]', testData.form.cardType);
	await page.fill('input[name="creditCardNumber"]', testData.form.creditCardNumber);
	await page.fill('input[name="creditCardMonth"]', testData.form.creditCardMonth);
	await page.fill('input[name="creditCardYear"]', testData.form.creditCardYear);
	await page.fill('input[name="nameOnCard"]', testData.form.nameOnCard);

	await page.getByRole('button', { name: testData.buttons.purchaseFlight }).click();

	await expect(page).toHaveURL(testData.urlChecks.confirmation);
	await expect(page.getByRole('heading', { name: testData.headings.confirmation })).toBeVisible();

	const purchaseId = page
		.locator('table tbody tr')
		.filter({ has: page.locator(`td:has-text("${testData.confirmation.idLabel}")`) })
		.locator('td')
		.nth(1);
	const purchaseStatus = page
		.locator('table tbody tr')
		.filter({ has: page.locator(`td:has-text("${testData.confirmation.statusLabel}")`) })
		.locator('td')
		.nth(1);
	const purchaseAmount = page
		.locator('table tbody tr')
		.filter({ has: page.locator(`td:has-text("${testData.confirmation.amountLabel}")`) })
		.locator('td')
		.nth(1);

	await expect(purchaseId).not.toBeEmpty();
	await expect(purchaseStatus).toHaveText(testData.confirmation.status);
	
});

