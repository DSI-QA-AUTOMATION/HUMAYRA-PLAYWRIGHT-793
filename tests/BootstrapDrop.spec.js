const {test, expect}= require ('@playwright/test')

test('Bootstrap dropdown',async ({page})=>{
    await page.goto('https://demoqa.com/select-menu');

    await page.getByText('Select...', { exact: true }).click()
    const menu = page.locator('.css-26l3qy-menu');  // dropdown panel
    await menu.getByText('Green', { exact: true }).click();

    // await page.getByText('Select...', { exact: true }).click()
    // const menu = page.locator('.css-26l3qy-menu');  // dropdown panel
    // await page.getByText('Green').click();
    // await menu.getByText('Blue', { exact: true }).click();
    // await page.locator('.css-1rhbuit-multiValue:has-text("Green") .css-xb97g8').click();

    await page.click('#react-select-4-option-1');  

    //dedelect

    await page.waitForTimeout(5000);
})