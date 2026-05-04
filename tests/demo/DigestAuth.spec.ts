import { DigestAuth } from '../../pages/DigestAuthPage';
import { HomePage } from './../../pages/HomePage';
import { test, expect } from '@playwright/test';


test('Validate Digest Auth page', async ({ page }) => {
    const homePage = new HomePage(page);
    const digestAuth = new DigestAuth(page);

    homePage.gotoHomePage();
    // URL Validation (Pre-login)
    await expect(page).toHaveURL(/.*internet/);
    //homePage.navToDigestAuth();
    await expect(homePage.lnk_Digest_Authentication).toBeEnabled();
    await page.getByRole('link', { name: 'Digest Authentication' }).click();
    //homePage.lnk_Digest_Authentication.click();
    //homePage.lnk_Context_Menu.click();
    await page.waitForLoadState('networkidle');
    //await page.waitForURL('https://the-internet.herokuapp.com/digest_auth');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/digest_auth');
    //https://the-internet.herokuapp.com/digest_auth
    await page.screenshot({ path: `./screenShots/DigestAuth-${Date.now()}.png`, fullPage: true });

    await page.pause();
})