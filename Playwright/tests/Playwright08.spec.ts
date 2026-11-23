//----- Interacting with Javascript Alerts -----
import { test, expect } from '@playwright/test'

test("TestCase8", async ({page})=>{
    await page.goto("https://blazedemo.com")
    await page.waitForTimeout(2000)

    // let fromPort = await page.locator('select[name="fromPort"]')
    // let toPort = await page.locator('select[name="toPort"]')
    // await fromPort.click() //not required as selectOption will automatically click on the dropdown
    // await fromPort.selectOption('Boston');
    // await toPort.click()
    // await toPort.selectOption('London')

    //simplified version of the above code
    await page.locator('select[name="fromPort"]').selectOption('Boston');
    await page.locator('select[name="toPort"]').selectOption('London');
    await page.locator('input[type="submit"]').click()

    await page.waitForTimeout(2000)

    await expect(page.locator('h3')).toHaveText("Flights from Boston to London:")
   // let flightResult = await page.locator('.btn-small'); //this will give the count of the buttons available on the page
    let flightResult = await page.locator('tbody tr'); //this will give the count of the rows available on the page
    
    //to get the count of the flights available on the page
    let flightCount = await flightResult.count();
    console.log("Total Flights : " + flightCount)

    await expect(flightResult).toHaveCount(5)
    await page.waitForTimeout(2000)
    
     

})

