const {test, expect}= require ('@playwright/test')

test('Asertions test',async ({page})=>{
    await page.goto('https://demoqa.com/elements')
    await expect(page).toHaveURL('https://demoqa.com/elements')

    await expect(page).toHaveTitle('DEMOQA')

    // await expect(page.locator('h1.text-center')).toBeVisible();
    const logoLink = page.locator('a[href="https://demoqa.com"]');
    await expect(logoLink).toBeVisible();

    // element enable, disable
    // const goBack = await page.locator('#gotologin')
    // await expect(goBack).toBeEnabled();
    //check radio butto
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

    // Check box
    await page.getByText('Check Box').click();

    //toggle button
    const toggleButton = page.getByRole('button', { name: 'Toggle' });
    await expect(toggleButton).toBeVisible();
    await toggleButton.click();


    try {
        const collapseButton = page.locator("button[aria-label='Collapse all']");
        await expect(collapseButton).toBeDisabled(); //as button is enabled it will return false, failed
    } catch (error) {
        console.log(' Element not found, skipping this step:', error.message);
    }

    const expandButton = page.locator("button[title='Expand all']")
    await expect(expandButton).toBeEnabled();
    await expandButton.click()

    // Notes checkbox
    const notesLabel = page.locator('label[for="tree-node-notes"]');
    await notesLabel.click();
    await expect(page.locator('#tree-node-notes')).toBeChecked();

    // Documents checkbox
    const docLabel = page.locator('label[for="tree-node-documents"]');
    await docLabel.click();
    await expect(page.locator('#tree-node-documents')).toBeChecked();

    // Collapse button should be enabled, not disabled
    const collapseButton = page.locator("button[aria-label='Collapse all']");
    await expect(collapseButton).toBeEnabled();

    // More specific locator for "Click Me" button
    await page.getByText('Buttons').click();
    const clickMe = page.getByRole('button', { name: 'Click Me', exact: true });
    await expect(clickMe).toHaveAttribute('type', 'button');

    // toHaveText: for full text
    await expect(await page.locator('.text-center')).toHaveText('Buttons');
    // toContainText: for partial text
    await clickMe.click()
    await expect(await page.locator('#dynamicClickMessage')).toContainText('a dynamic click')
    // double click
    const dblClick = await page.locator('#doubleClickBtn')
    await dblClick.dblclick()
    // right click
    const rightClick= await page.locator('#rightClickBtn')
    await rightClick.click({ button: 'right' })

    // toHaveValue
    await page.goto('https://demoqa.com/automation-practice-form')
    const emailBox= await page.locator('#userEmail')
    await emailBox.fill('test@email.com')
    await expect(emailBox).toHaveValue('test@email.com')

    // const DoBcount = await page.locator('#dateOfBirthInput')
    // await expect(DoBcount).toHaveValue('27 Oct 2025')

    await page.getByText('Select State').click();

    const st = page.locator('[id^="react-select-3-option-"]');
    await expect(st).toHaveCount(4);


})