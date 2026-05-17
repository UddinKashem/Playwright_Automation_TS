import { expect, type Page, type Locator } from '@playwright/test';

export class FormAuthenticationPage{

    readonly page: Page;
    readonly hd_LoginPage: Locator;
    readonly hd_This_Log: Locator;
    readonly txt_Username: Locator;
    readonly txtBox_Username: Locator;
    readonly txt_Password: Locator;
    readonly txtBox_Password: Locator;
    readonly btn_Login: Locator;

    constructor(page: Page){
        this.page= page;
        this.hd_LoginPage = page.getByRole('heading', { name: 'Login Page' });
        this.hd_This_Log = page.getByRole('heading', { name: 'This is where you can log' });
        this.txt_Username = page.getByText('Username', { exact: true });
        this.txtBox_Username = page.getByRole('textbox', { name: 'Username' });
        this.txt_Password = page.getByText('Password', { exact: true });
        this.txtBox_Password = page.getByRole('textbox', { name: 'Password' });
        this.btn_Login = page.getByRole('button', { name: ' Login' });
    }

    async validateFormAuthenticationPage(){
        await expect(this.hd_LoginPage).toBeVisible({timeout: 1500});
        await expect(this.hd_This_Log).toBeInViewport();
        await expect(this.txt_Username).toBeVisible();
        await expect(this.txtBox_Username).toBeEditable();
        await expect(this.txt_Password).toBeVisible();
        await expect(this.txtBox_Password).toBeEditable();
        await expect(this.btn_Login).toBeEnabled();
    }
}