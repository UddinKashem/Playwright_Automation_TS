import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { DynamicContentPage } from '../../pages/DynamicContentPage';


test('Validate Dynamic Content Page', async({page}) => {
    const homePage = new HomePage(page);
    const dynamicContentPage = new DynamicContentPage(page);

    homePage.gotoHomePage();
    homePage.validateHomePage();
    await expect(homePage.lnk_Dynamic_Content).toBeEnabled();
    await homePage.lnk_Dynamic_Content.click();
    await page.waitForURL('https://the-internet.herokuapp.com/dynamic_content');
    dynamicContentPage.validateDynamicContent();

    await page.pause();
})