import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { FormAuthenticationPage } from '../../pages/FormAuthticationPage';


test.describe('Form Authentication Page Validation', () => {

    let homePage: HomePage;
    let formAuthenticattionPage: FormAuthenticationPage;

    test.beforeEach(async({page}) => {

        homePage = new HomePage(page);
        homePage.gotoHomePage();
        homePage.validateHomePage();
        homePage.navToFormAuthenticationPage();
    });

    test('Validate Form Authentication Page', async({page}) => {

        formAuthenticattionPage = new FormAuthenticationPage(page);

        await formAuthenticattionPage.validateFormAuthenticationPage();
        //await formAuthenticattionPage.page.pause();
    });
});
