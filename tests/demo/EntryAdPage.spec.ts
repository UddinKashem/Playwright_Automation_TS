import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { EntryAdPage } from '../../pages/EntryAdPage';

test.describe('Entry Ad Page Validation', () => {

    let homePage: HomePage;
    let entryAdPage: EntryAdPage;

    test.beforeEach(async ({ page }) => {

        homePage = new HomePage(page);

        await homePage.gotoHomePage();
        await homePage.validateHomePage();
        await homePage.navToEntryAdPage();
    });

    test('Validate Entry Ad Page', async({page}) => {
        entryAdPage = new EntryAdPage(page);
        await entryAdPage.ValidateEntryAdPage();
    })
});