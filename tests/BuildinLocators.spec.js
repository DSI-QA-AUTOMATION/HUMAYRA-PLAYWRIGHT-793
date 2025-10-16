const {test,expect} =require('@playwright/test');

test('Build-InLocators', async({page})=>{
    await page.goto('https://demoqa.com/text-box')

    await page.waitForSelector("img[src='/images/Toolsqa.jpg']")
    const logo=  page.locator('img[src="/images/Toolsqa.jpg"]')
    await expect(logo).toBeVisible()

    const heading = page.locator('h1.text-center');
    await expect(heading).toBeVisible()

    // using placeholder
    await page.getByPlaceholder('Full Name').fill('Tom Hilderson')
    await page.getByPlaceholder('name@example.com').fill('tom@email.com')
    //using label
    // await page.waitForTimeout(3000);
    await page.getByPlaceholder('Current Address').fill('Dhaka 1206')
    await page.locator('#permanentAddress').fill('Dhaka, Bangladesh');
   //explicit and implicit accessibility attributes, like button/link (actionable element)
    await page.getByRole('button', {type:"button"}).click();
    
    page.close();
})