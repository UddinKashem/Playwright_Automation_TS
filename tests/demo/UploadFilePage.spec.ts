import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { UploadFilePage } from '../../pages/UploadFilePage';


test.describe('Upload File Page Validation', () => {
    let homePage: HomePage;
    let uploadFilePage: UploadFilePage;

    test.beforeEach(async({page}) => {
        homePage = new HomePage(page);
        homePage.gotoHomePage();
        homePage.validateHomePage();
        homePage.navToUploadFilePage();

    });

    test('Validate Upload File Page', async({page}) => {
        uploadFilePage = new UploadFilePage(page);

        await uploadFilePage.validateFileUploadPage();

       // await uploadFilePage.page.pause();

    });
});