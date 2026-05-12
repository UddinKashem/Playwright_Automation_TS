import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { DynamicLoadingPage } from '../../pages/DynamicLoadingPage';

test.describe('Dynamic Loading Page Validation', () => {

    let homePage: HomePage;
    let dynamicLoadingPage: DynamicLoadingPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.validateHomePage();
        await homePage.navToDynamicLoadingPage();
    });

    test('Validate Dynamic Loading Page', async ({ page }) => {
        dynamicLoadingPage = new DynamicLoadingPage(page);
        await dynamicLoadingPage.validateDynamicLoading();
    });

    test('Validate Example 1 Dynamic Content', async ({ page }) => {
        dynamicLoadingPage = new DynamicLoadingPage(page);
        await dynamicLoadingPage.validateExample1DynamicElement();
    });

    test('Validate Example 2 Dynamic Content', async ({ page }) => {
        dynamicLoadingPage = new DynamicLoadingPage(page);
        await dynamicLoadingPage.validateExample2DynamicElement();
    });
});
