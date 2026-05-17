import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { FloatingMenuPage } from '../../pages/FloatingMenuPage';


test.describe('Floating Menu Page Validation', () => {

    let homePage: HomePage;
    let floatingMenuPage: FloatingMenuPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);

        homePage.gotoHomePage();
        homePage.validateHomePage();
        homePage.navToFloatingMenuPage();
    });

    test('Validate Floating Menu Page', async({page}) => {
        floatingMenuPage = new FloatingMenuPage(page);

        await floatingMenuPage.validateFloatingMenuPage();
        await floatingMenuPage.page.pause();
    });
});