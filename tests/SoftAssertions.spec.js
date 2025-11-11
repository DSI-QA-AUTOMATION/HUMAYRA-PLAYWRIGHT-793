const {test, expect}= require ('@playwright/test')

test("Soft assertions", async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

    // Hard assertions
    await expect.soft(page).toHaveTitle('Store123');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})