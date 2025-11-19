const {test, expect}= require ('@playwright/test')

test('Asertions test',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#country').selectOption({label:'India'});

    await page.waitForTimeout(5000);

})