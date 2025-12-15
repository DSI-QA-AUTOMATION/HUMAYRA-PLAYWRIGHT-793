const {test, expect}= require ('@playwright/test')

test('Auto suggest dropdown',async ({page})=>{
    await page.goto('https://demoqa.com/auto-complete');

    await page.locator('#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container').click();
    await page.locator('#autoCompleteSingleInput').fill('e');
    await page.waitForSelector("//div[contains(@class,'auto-complete__menu')]")
    // await page.waitForSelector("//div[contains(@class,'auto-complete__menu-list')]//div[contains(@id,'react-select-3-option-1')]")

    const colorOption= await page.$$('.auto-complete__menu.css-26l3qy-menu')

    for (let opt of colorOption){
        const value=await opt.textContent()
        console.log(value)
        if(value.includes('Red')){
            await opt.click()
            break;
        }
    }


    await page.waitForTimeout(3000)
})