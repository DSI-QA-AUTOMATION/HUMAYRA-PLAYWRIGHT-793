const {test, expect}= require ('@playwright/test')

test('Drop down',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //asseertions
    const opts= await page.locator('#country option')
    await expect(opts).toHaveCount(10);

    const options= await page.$$('#country option')
    console.log("Options:", options.length)
    await expect(options.length).toBe(10)

    let status=false;
    for(const option of options){
        // console.log(await option.textContent())
        let value= await option.textContent();
        if(value.includes('France')){
            status=true;
            break;
        }
    }
    expect(status).toBeTruthy();

    // check element in dropdown
    const cont= await page.locator('#country').textContent();
    await expect(cont.includes('Canada')).toBeTruthy();

    await page.locator('#country').selectOption({label:'Germany'});
    // await page.locator('#country').selectOption('India'); visible text


    // select multiple options multi select dropdown
    await page.selectOption('#colors', ['Blue','Red','Yellow'])

    // Assertions
    // check number of options
    const colors = page.locator('#colors option');
    await expect(colors).toHaveCount(7);

     const contcolors= await page.locator('#country').textContent();
    await expect(contcolors.includes('Sky')).toBeFalsy();

     // select multiple options multi select dropdown
    await page.selectOption('#colors', ['Blue','Red','Yellow'])

    await page.waitForTimeout(5000);
})