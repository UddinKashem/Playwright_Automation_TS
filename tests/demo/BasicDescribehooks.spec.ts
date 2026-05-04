import { test, expect } from '@playwright/test';

test.describe('basic navigation', () => {
  test.beforeEach(async ({ page }) => {
    //Go to the starting url before each test.
    await page.goto('https://playwright.dev/');
  });

  test('Home page navidation', async ({ page }) => {
    await expect(page).toHaveURL('https://playwright.dev/');
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeInViewport();
  });

  test('navigate to the instalation page', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Get started' })).toBeEnabled();
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('link', { name: 'Installation' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeEnabled();
    await expect(page.getByRole('heading', { name: 'IntroductionDirect link to' })).not.toBeNull();
    await expect(page.getByText('Playwright Test is an end-to-')).toBeVisible();
    await expect(page.getByText('You will learn')).toBeEnabled();
    await expect(page.getByRole('heading', { name: 'Installing PlaywrightDirect' })).toBeInViewport();
    //await page.pause();
  });

  test('validate writing tests page', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Get started' })).toBeEnabled();
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
    await page.getByRole('heading', { name: 'Writing tests' }).click();
    await page.getByRole('heading', { name: 'IntroductionDirect link to' }).click();
    await page.getByText('Playwright tests are simple:').click();
    await page.getByText('Playwright automatically').click();
    await page.getByText('You will learn').click();
    await page.getByRole('heading', { name: 'First testDirect link to' }).click();
  });
});