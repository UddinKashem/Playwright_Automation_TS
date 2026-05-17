import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ForgotPasswordPage } from '../../pages/ForgotPasswordPage';


test.describe('Forgot Page Validation', () => {
   
    let homePage: HomePage;
    let forgotPasswordPage: ForgotPasswordPage;
   
    test.beforeEach(async({page}) => {
        homePage = new HomePage(page);

        homePage.gotoHomePage();
        homePage.validateHomePage();
        homePage.navForgotPasswordPage();

    });

    test('Validate Forgot Password Page', async({page}) => {
        forgotPasswordPage = new ForgotPasswordPage(page);
 
        await forgotPasswordPage.validateForgotPassword();
       // await forgotPasswordPage.page.pause();
    })
});
