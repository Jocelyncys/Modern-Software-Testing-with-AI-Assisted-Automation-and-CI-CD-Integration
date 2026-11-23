// Import the test and expect functions from Playwright Test framework
import { test, expect } from '@playwright/test'

// Define a test case for Amazon search validation
test("Amazon Search Validation", async ({ page }) => {
    // Navigate to Amazon.com website
    await page.goto("https://www.amazon.com")

    // Wait for 3 seconds to allow the page to fully load
    await page.waitForTimeout(3000)

    // Click on the search input field using different selector options
    // Try the input field ID or other common selectors
    const searchInput = page.locator('#twotabsearchtextbox, input[name="k"], input[placeholder*="Search"]').first()

    // Click the search input
    await searchInput.click()

    // Type the search keyword "laptop" in the search field
    await searchInput.fill("laptop")

    // Wait for 1 second before pressing Enter
    await page.waitForTimeout(1000)

    // Press the Enter key to submit the search
    await page.keyboard.press("Enter")

    // Wait for 4 seconds to allow search results to load
    await page.waitForTimeout(4000)

    // Get all product results on the search results page
    const productCount = await page.locator('[data-component-type="s-search-result"]').count()

    // Verify that at least 1 product is displayed in the search results
    expect(productCount).toBeGreaterThan(0)

    // Log the number of search results found to the console
    console.log(`✓ Found ${productCount} products for "laptop"`)

    // Locate the first product in the search results
    const firstProduct = page.locator('[data-component-type="s-search-result"]').first()

    // Get the product title text
    const titleLocator = firstProduct.locator('span[data-a-color="base"]')
    const productTitleText = await titleLocator.first().textContent() || "Title not found"

    // Log the first product title to the console
    console.log(`✓ First product: ${productTitleText?.trim()}`)

    // Verify that the page URL contains "k=" which indicates search results page
    expect(page.url()).toContain("k=")
    console.log(`✓ Page URL confirmed: ${page.url()}`)

    // Verify that the page title contains "laptop"
    const pageTitle = await page.title()
    console.log(`✓ Page title: ${pageTitle}`)
    expect(pageTitle.toLowerCase()).toContain("laptop")

    // Log a success message to indicate the test passed
    console.log("✓ Amazon search validation test completed successfully!")
})

