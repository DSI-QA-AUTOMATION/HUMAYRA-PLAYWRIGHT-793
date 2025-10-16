import { test, expect } from '@playwright/test';

test('Locators', async ({page})=> {
    await page.goto("https://www.demoblaze.com/index.html")

    //click on login button -property
    // await page.locator('id=login2').click();
    await page.click('id=login2')

    //provide username and password
    await page.locator('#loginusername').fill("humayra")
    // await page.type("input[id='loginpassword']", 'humayra')
    // useb double cotation for xpath
    // pass: CSS
    await page.fill("input[id='loginpassword']", 'humayra')
    //login button click- xpath
    await page.click("//button[normalize-space()='Log in']")

    //verify logout link presence - xpath
    const logoutLink = await page.locator('#logout2')
    await expect(logoutLink).toBeVisible();

    page.close()
})