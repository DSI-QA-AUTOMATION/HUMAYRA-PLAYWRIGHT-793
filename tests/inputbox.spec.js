const {test,expect} =require('@playwright/test');

test('Build-InLocators', async({page})=>{
    await page.goto('https://demoqa.com/text-box')
    await page.locator("//input[@id='userName']").fill('Robert Peter')
    await page.locator("//input[@id='userEmail']").fill('robert@email.com')
    await page.locator("#currentAddress").fill('Dhaka')
    await page.locator("#permanentAddress").fill('Bangladesh')
    await page.locator('#submit').click();
    
})