import { expect, type Page, type Locator } from '@playwright/test';

export class DynamicContentPage {

    readonly page: Page;
    readonly hd_DynamicContent: Locator;
    readonly txt_ThisExample: Locator;
    readonly txt_ToMake: Locator;
    readonly lnk_CLickHere: Locator;
    readonly txt_Static: Locator;

    constructor(page: Page){
        this.page = page;
        this.hd_DynamicContent = page.getByRole('heading', { name: 'Dynamic Content' });
        this.txt_ThisExample = page.getByText('This example demonstrates the');
        this.txt_ToMake = page.getByText('To make some of the content');
        this.lnk_CLickHere = page.getByRole('link', { name: 'click here' });
        this.txt_Static = page.getByText('?with_content=static');
    }

    async validateDynamicContent(){
        await expect(this.hd_DynamicContent).toBeVisible();
        await expect(this.txt_ThisExample).toBeInViewport();
        await expect(this.txt_ToMake).toBeVisible();
        await expect(this.lnk_CLickHere).toBeEnabled();
        await expect(this.txt_Static).toBeInViewport();
    }
}