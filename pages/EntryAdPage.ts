import { expect, type Page, type Locator } from "@playwright/test";

export class EntryAdPage{

    readonly page: Page;
    readonly hd_ModalWindow: Locator;
    readonly txt_Commonly: Locator;
    readonly btn_CLose: Locator;
    readonly hd_EntryAd: Locator;
    readonly txt_Displays: Locator;
    readonly txt_Appear: Locator;
    readonly txt_ReEnable: Locator;
    readonly lnk_ClickHere: Locator;

    constructor(page: Page){
        this.page = page;
        this.hd_ModalWindow = page.getByRole('heading', { name: 'This is a modal window' });
        this.txt_Commonly = page.getByText('It\'s commonly used to');
        this.btn_CLose = page.getByText('Close', { exact: true });
        this.hd_EntryAd = page.getByRole('heading', { name: 'Entry Ad' });
        this.txt_Displays = page.getByText('Displays an ad on page load.');
        this.txt_Appear = page.getByText('If closed, it will not appear');
        this.txt_ReEnable = page.getByText('To re-enable it, click here.');
        this.lnk_ClickHere = page.getByRole('link', { name: 'click here' });
    }

    async ValidateEntryAdPage(){
        await expect(this.hd_ModalWindow).toBeVisible({timeout: 5000});
        await expect(this.btn_CLose).toBeEnabled();
        await this.btn_CLose.click();
        await expect(this.btn_CLose).not.toBeVisible({ timeout: 5000 });
        await expect(this.hd_ModalWindow).not.toBeVisible();
        await expect(this.hd_EntryAd).toBeInViewport();
        await expect(this.txt_Displays).toBeVisible();
        await expect(this.txt_Appear).not.toBeHidden();
        await expect(this.txt_ReEnable).toContainText(/re-enable/);
        await expect(this.lnk_ClickHere).toBeEnabled({ timeout: 5000 });
        await this.lnk_ClickHere.click();
        await expect(this.hd_ModalWindow).toBeVisible({timeout: 15000});
        await expect(this.btn_CLose).toBeEnabled();
    }
}