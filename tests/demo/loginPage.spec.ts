import { test, expect } from '@playwright/test';
import { LoginPage  } from '../../pages/LoginPage';

test('user can log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoHomePage();
    await loginPage.doLogin('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page).toHaveTitle(/Swag Labs/);
    //await page.getByText('Swag Labs')

    //await page.pause();
});