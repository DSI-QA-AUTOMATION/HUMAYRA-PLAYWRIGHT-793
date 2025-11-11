const {test, expect}= require ('@playwright/test')

test('Asertions test',async ({page})=>{
    await page.goto('https://demoqa.com/elements')

// check disable button 
    await page.getByText('Radio Button').click();
    const noRadioButton = page.locator("label[for='noRadio']");
    await expect(noRadioButton).toBeDisabled(); 
    //check enabled button
    const yesRadioButton = page.locator("label[for='yesRadio']")
    await expect(yesRadioButton).toBeEnabled();

    //ctoBeChecked
    await yesRadioButton.click()
    await expect(yesRadioButton).toBeChecked()

})