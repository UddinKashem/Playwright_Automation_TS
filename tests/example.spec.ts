import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.only('Test the saucelab demo', async ({ page}) => {
  await page.goto('https://saucedemo.com');
  await page.pause();
  /*
  test('test', async ({ page }) => {
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});
  */
})

// test('test to demo', async ({ page }) => {
//   await page.goto('https://demo.playwright.dev/todomvc/#/');
//   await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
//   await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
//   await page.getByText('Double-click to edit a todo').click();
//   await page.getByText('Double-click to edit a todo Created by Remo H. Jansen Part of TodoMVC').click();
//   await page.getByRole('link', { name: 'Repositories' }).click();
//   await page.getByRole('link', { name: 'Actions Automate any workflow' }).click();
//   await page.getByRole('link', { name: 'Code review' }).click();
//   await page.getByTestId('Grid-:R6pb:').getByRole('link', { name: 'Get started' }).click();
//   await page.getByText('The basics for individuals').click();
//   await page.getByRole('button', { name: 'Search or jump to…' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Search syntax tips' }).click();
//   const page1 = await page1Promise;
// });
