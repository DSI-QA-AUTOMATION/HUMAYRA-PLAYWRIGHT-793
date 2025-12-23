const {test, expect}= require ('@playwright/test')

test('Hidden Drop down',async ({page})=>{
    await page.goto('https://demoqa.com/select-menu');

    await page.locator("//div[contains(text(),'Select Option')]").click();
    await page.waitForSelector('.css-26l3qy-menu')

    await page.locator('#react-select-2-option-0-0').click();
})