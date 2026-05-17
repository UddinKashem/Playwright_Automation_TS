import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { NestedFramesPage } from '../../pages/NestedFramesPage';


test.describe('Frames Page Validation', () => {

    let homePage: HomePage;
    let nestedFramesPage: NestedFramesPage;

    test.beforeEach(async({page}) => {
        homePage = new HomePage(page);

        homePage.gotoHomePage();
        homePage.validateHomePage();
        homePage.navToFrames();
    });

    test('Validate Frames Page', async({page}) => {
        nestedFramesPage = new NestedFramesPage(page);

        await nestedFramesPage.validateFramesPage();
        //await nestedFramesPage.page.pause();
    });

    test('Validte Nested Frames Page', async({page}) => {
        nestedFramesPage = new NestedFramesPage(page);

        await nestedFramesPage.validateNestedFrames();

        //await nestedFramesPage.page.pause();
    });

    test('Validate iFrame Page', async({page}) => {

        nestedFramesPage = new NestedFramesPage(page);

        await nestedFramesPage.validateiFrames();
        //await nestedFramesPage.page.pause();

    });
});