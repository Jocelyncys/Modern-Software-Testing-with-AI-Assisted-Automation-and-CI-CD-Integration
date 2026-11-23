// Import the test and expect functions from Playwright Test framework
import { test, expect } from '@playwright/test'

// Define a test case for Amazon search validation
test("Amazon Search Validation", async ({ page }) => {
    // Navigate to Amazon.com website
    await page.goto("https://www.amazon.com")

    // Wait for 2 seconds to allow the page to fully load
    await page.waitForTimeout(2000)

    // Click on the search input field using the CSS selector
    await page.locator('input[placeholder="Search Amazon"]').click()

    // Type the search keyword "laptop" in the search field
    await page.locator('input[placeholder="Search Amazon"]').fill("laptop")

    // Wait for 1 second before pressing Enter
    await page.waitForTimeout(1000)

    // Press the Enter key to submit the search
    await page.keyboard.press("Enter")

    // Wait for 3 seconds to allow search results to load
    await page.waitForTimeout(3000)

    // Verify that the search results heading contains the text "laptop"
    await expect(page.locator('h1, span').first()).toContainText("laptop", { ignoreCase: true })

    // Get all product results on the search results page
    const productCount = await page.locator('[data-component-type="s-search-result"]').count()

    // Verify that at least 1 product is displayed in the search results
    expect(productCount).toBeGreaterThan(0)

    // Log the number of search results found to the console
    console.log(`Found ${productCount} products for "laptop"`)

    // Locate the first product in the search results
    const firstProduct = page.locator('[data-component-type="s-search-result"]').first()

    // Verify that the first product has a title/name visible
    const productTitle = firstProduct.locator('h2 a span')

    // Verify that the product title is visible on the page
    await expect(productTitle).toBeVisible()

    // Get the text content of the first product title
    const productTitleText = await productTitle.textContent()

    // Log the first product title to the console
    console.log(`First product: ${productTitleText}`)

    // Verify that the product title contains text (is not empty)
    expect(productTitleText).toBeTruthy()

    // Verify that the product title includes the word "laptop" (case-insensitive)
    expect(productTitleText?.toLowerCase()).toContain("laptop")

    // Locate the price element of the first product
    const priceElement = firstProduct.locator('span.a-price-whole')

    // Verify that the price element is visible
    await expect(priceElement).toBeVisible()

    // Get the price text content
    const priceText = await priceElement.textContent()

    // Log the price to the console
    console.log(`Product price: ${priceText}`)

    // Verify that the price text is not empty
    expect(priceText).toBeTruthy()

    // Check if the product has a rating element
    const ratingElement = firstProduct.locator('span[aria-label*="out of"]')

    // Log the rating if it exists
    if (await ratingElement.isVisible()) {
        // Get the rating text content
        const ratingText = await ratingElement.textContent()

        // Log the rating to the console
        console.log(`Product rating: ${ratingText}`)
    } else {
        // Log a message if rating is not available
        console.log("Rating not available for this product")
    }

    // Verify that the page URL contains "s?k=" which indicates search results page
    expect(page.url()).toContain("s?k=")

    // Verify that the page title contains "laptop"
    const pageTitle = await page.title()

    // Log the page title to the console
    console.log(`Page title: ${pageTitle}`)

    // Verify that the page title includes the search keyword
    expect(pageTitle.toLowerCase()).toContain("laptop")

    // Log a success message to indicate the test passed
    console.log("✓ Amazon search validation test completed successfully!")
})
