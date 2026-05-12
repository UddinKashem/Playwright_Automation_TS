import { expect, type Page, type Locator } from '@playwright/test';

export class DynamicLoadingPage {

    readonly page: Page;
    readonly hd_d_LoadedPage: Locator;
    readonly txt_CommonAction: Locator;
    readonly txt_There_Examples: Locator;
    readonly lnk_Example1: Locator;
    readonly lnk_Example2: Locator;
    readonly hd_Example1: Locator;
    readonly btn_Start: Locator;
    readonly hd_HelloWorld: Locator;
    readonly hd_Example2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hd_d_LoadedPage = page.getByRole('heading', { name: 'Dynamically Loaded Page' });
        this.txt_CommonAction = page.getByText('It\'s common to see an action');
        this.txt_There_Examples = page.getByText('There are two examples. One');
        this.lnk_Example1 = page.getByRole('link', { name: 'Example 1: Element on page' });
        this.lnk_Example2 = page.getByRole('link', { name: 'Example 2: Element rendered' });
        this.hd_Example1 = page.getByRole('heading', { name: 'Example 1: Element on page' });
        this.btn_Start = page.getByRole('button', { name: 'Start' });
        this.hd_HelloWorld = page.getByRole('heading', { name: 'Hello World!' });
        this.hd_Example2 = page.getByRole('heading', { name: 'Example 2: Element rendered' });

    }

    async validateDynamicLoading() {
        await expect(this.hd_d_LoadedPage).toBeInViewport();
        await expect(this.txt_CommonAction).toBeVisible();
        await expect(this.txt_There_Examples).toContainText(/There are two examples./);
        await expect(this.lnk_Example1).toBeEnabled();
        await expect(this.lnk_Example2).toBeEnabled();
    }

    async validateExample1DynamicElement() {
        await expect(this.lnk_Example1).toBeInViewport();
        await this.lnk_Example1.click();
        await this.page.waitForURL('https://the-internet.herokuapp.com/dynamic_loading/1');
        await expect(this.hd_d_LoadedPage).toBeVisible();
        await expect(this.hd_Example1).toBeInViewport();
        await expect(this.btn_Start).toBeEnabled();
        await this.btn_Start.click();
        await expect(this.hd_HelloWorld).toBeVisible({ timeout: 15000 });
    }

    async validateExample2DynamicElement() {
        await expect(this.lnk_Example2).toBeInViewport();
        await this.lnk_Example2.click();
        await this.page.waitForURL('https://the-internet.herokuapp.com/dynamic_loading/2');
        await expect(this.hd_d_LoadedPage).toBeVisible();
        await expect(this.hd_Example2).toBeInViewport();
        await expect(this.btn_Start).toBeEnabled();
        await this.btn_Start.click();
        await expect(this.hd_HelloWorld).toBeVisible({ timeout: 15000 });
    }
}