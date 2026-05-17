import { expect, type Page, type Locator } from '@playwright/test';

export class ForgotPasswordPage{

    readonly page: Page;
    readonly hd_ForgodPassword: Locator;
    readonly txt_Email: Locator;
    readonly txtBox_Email: Locator;
    readonly btn_RetrivePassword: Locator;

    constructor(page: Page){
        this.page = page;
        this.hd_ForgodPassword = page.getByRole('heading', { name: 'Forgot Password' });
        this.txt_Email = page.getByText('E-mail');
        this.txtBox_Email = page.getByRole('textbox', { name: 'E-mail' });
        this.btn_RetrivePassword = page.getByRole('button', { name: 'Retrieve password' });
    }

    async validateForgotPassword(){
        await expect(this.hd_ForgodPassword).toBeVisible({timeout: 1500});
        await expect(this.txt_Email).toBeInViewport();
        await expect(this.txtBox_Email).toBeEditable();
        await expect(this.btn_RetrivePassword).toBeEnabled();
    }
}