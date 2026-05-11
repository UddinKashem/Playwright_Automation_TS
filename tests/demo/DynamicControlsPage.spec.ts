import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { DynamicContentPage } from '../../pages/DynamicControlsPage';


test.describe('Dynamic Controls Page Validation', () => {
    let homePage: HomePage;
    let dynamicControlsPage: DynamicContentPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.validateHomePage();
        await homePage.navToDynamicControls();
    });

    test('Validate Dynamic Controls Page', async ({ page }) => {
        dynamicControlsPage = new DynamicContentPage(page);
        await dynamicControlsPage.validateDynamicControls();
    });

    test('Validate Remove and Add Activity', async ({ page }) => {
        dynamicControlsPage = new DynamicContentPage(page);
        await dynamicControlsPage.validateDynamicControls();
        await dynamicControlsPage.validateRemoveNAddActivity();
    });

    test('Validate Enable and Disable Activity', async ({ page }) => {
        dynamicControlsPage = new DynamicContentPage(page);
        await dynamicControlsPage.validateDynamicControls();
        await dynamicControlsPage.validateEnableActivity();
    });

});