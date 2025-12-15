import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // await page.goto('https://demoqa.com/');
  // await page.locator('.card-up').first().click();
  // await page.getByText('Text Box').click();
  // await page.getByRole('textbox', { name: 'Full Name' }).click();
  // await page.getByRole('textbox', { name: 'Full Name' }).fill('Humayra Jahan');
  // await page.getByRole('textbox', { name: 'name@example.com' }).click();
  // await page.getByRole('textbox', { name: 'name@example.com' }).fill('jahan@email.com');
  // await page.getByRole('textbox', { name: 'Current Address' }).click();
  // await page.getByRole('textbox', { name: 'Current Address' }).fill('Dhaka');
  // await page.locator('#permanentAddress').click();
  // await page.locator('#permanentAddress').fill('Bangladesh');
  // await page.getByRole('button', { name: 'Submit' }).click();

  page.close();
//   await page.getByText('Name:Humayra Jahan').click();
//   await page.getByText('Email:jahan@email.com').click();
//   await page.getByText('Current Address :Dhaka').click();
//   await page.getByText('Permananet Address :Bangladesh').click();

});

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://demoqa.com/automation-practice-form');
//   await page.locator('#state svg').click();
//   await page.getByText('NCR', { exact: true }).click();
//   await page.locator('.css-1gtu0rj-indicatorContainer').click();
//   await page.locator('#react-select-3-option-0').click();
//   await page.locator('#state svg').click();
//   await page.locator('#state svg').click();
//   await page.locator('#state svg').click();
// });