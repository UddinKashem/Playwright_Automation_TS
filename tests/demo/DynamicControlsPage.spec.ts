import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { DynamicContentPage } from '../../pages/DynamicControlsPage';


test('Validate Dynamic Controls page', async({page}) => {
    const homePage = new HomePage(page);
    const dynamicControlsPage = new DynamicContentPage(page);

    homePage.gotoHomePage();
    homePage.validateHomePage();
    homePage.navToDynamicControls();
    dynamicControlsPage.validateDynamicControls();


    await page.pause();

})