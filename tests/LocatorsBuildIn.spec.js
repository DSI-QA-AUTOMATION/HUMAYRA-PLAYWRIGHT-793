const {test,expect} =require('@playwright/test');

test('Build-InLocators', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.waitForSelector('img[alt="company-branding"]');
    const logo=  page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    // using placeholder
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //explicit and implicit accessibility attributes, like button/link (actionable element)
    await page.getByRole('button', {type:"submit"}).click();
    
    const name = page.locator('.oxd-userdropdown-name')
    await name.waitFor({ state: 'visible' }) // ensures DOM ready
  // Extract text and assert
    const nameText = await name.textContent();  
    await expect(await page.getByText(nameText)).toBeVisible()

    
    page.close();
})