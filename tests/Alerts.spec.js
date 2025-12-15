const {test, expect}= require ('@playwright/test');

test.skip('Alerts test',async ({page})=>{
    await page.goto('https://demoqa.com/alerts')
    //write dialog window handler, enable alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('You clicked a button')
        await dialog.accept();
    })

    await page.click("//button[@id='alertButton']");
    await page.waitForTimeout(5000);
})

test.skip('Delayed alert test', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  const dialogPromise = page.waitForEvent('dialog');

  await page.click('#timerAlertButton'); // this button triggers 5s delayed alert

  const dialog = await dialogPromise;
  expect(dialog.type()).toBe('alert');
  expect(dialog.message()).toContain('This alert appeared after 5 seconds');
    // page.on('dialog', async dialog => {
    // expect(dialog.type()).toBe('alert');
    // await dialog.accept();
    // });

    // await page.click('#timerAlertButton');

});

test.skip('cONFIRMATIONS Alerts with ok cancel',async ({page})=>{
    await page.goto('https://demoqa.com/alerts')
    //write dialog window handler, enable alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toBe('confirm')
        expect(dialog.message()).toContain('Do you confirm action?')
        // closing by ok button
        // await dialog.accept();
        // closing by caancel button
        await dialog.dismiss();

    })

    await page.click('#confirmButton');
    await expect(page.locator("//span[@id='confirmResult']")).toHaveText('You selected Cancel')
    await page.waitForTimeout(5000);
})

test('Alert with prompt box',async ({page})=>{
    await page.goto('https://demoqa.com/alerts')
    //write dialog window handler, enable alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name')

        await dialog.accept('Benedict Cumberbaatch');
    })

    await page.click('#promtButton');
     await expect(page.locator('#promptResult')).toHaveText('You entered Benedict Cumberbaatch')
    await page.waitForTimeout(5000);
})


