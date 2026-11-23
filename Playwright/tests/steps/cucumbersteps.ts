import { Given, When, Then, After, Before, setDefaultTimeout } from "@cucumber/cucumber"
import { chromium, expect } from "@playwright/test"

let page: any
let browser: any
setDefaultTimeout(30000);

Before(async () => {

    browser = await chromium.launch({ headless: false })
    page = await browser.newPage()
    await page.setDefaultTimeout(20000)
    await page.setDefaultNavigationTimeout(60000)
})

After(async () => {
    if (browser) {
        await browser.close()
    }
})


Given("User has navigated to {string}", async (url: string) => {
    await page.goto(url, { timeout: 60000 })
    await page.waitForTimeout(2000)
})

When("User Searches for {string} to {string}", async (fromCity: string, toCity: string) => {
    await page.locator('select[name="fromPort"]').selectOption({ label: fromCity.trim() })
    await page.locator('select[name="toPort"]').selectOption({ label: toCity.trim() })
    await page.locator("//input[@value='Find Flights']").click()
    await page.waitForTimeout(3000)
})

Then("Result page should show {int} flights", async (expectedCount: number) => {
    await expect(page.locator("table tbody tr")).toHaveCount(expectedCount)
})


