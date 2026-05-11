import { expect, type Page, type Locator } from '@playwright/test';

export class DynamicContentPage{

    readonly page: Page;
    readonly hd_DynamicControls: Locator;
    readonly txt_ThisExample: Locator;
    readonly hd_RemoveAdd: Locator;
    readonly hd_EnableDisable: Locator;
    readonly chk_A_CheckBox: Locator;
    readonly btn_Remove: Locator;
    readonly btn_Enable: Locator;
    readonly btn_Add: Locator;
    readonly btn_Disable: Locator;
    readonly txt_ItsGone: Locator;
    readonly txt_ItsBack: Locator;
    readonly txt_Textbox: Locator;
    readonly txt_Enable: Locator;
    readonly txt_ItsDisable: Locator;

    constructor(page: Page){
        this.page = page;
        this.hd_DynamicControls = page.getByRole('heading', { name: 'Dynamic Controls' });
        this.txt_ThisExample = page.getByText('This example demonstrates');
        this.hd_RemoveAdd = page.getByRole('heading', { name: 'Remove/add' });
        this.hd_EnableDisable = page.getByRole('heading', { name: 'Enable/disable' });
        this.chk_A_CheckBox = page.getByText('A checkbox');
        this.btn_Remove = page.getByRole('button', { name: 'Remove' });
        this.btn_Enable = page.getByRole('button', { name: 'Enable' });
        this.btn_Add = page.getByRole('button', { name: 'Add' });
        this.btn_Disable = page.getByRole('button', { name: 'Disable' });
        this.txt_ItsGone = page.getByText('It\'s gone!');
        this.txt_ItsBack = page.getByText('It\'s back!');
        this.txt_Textbox = page.getByRole('textbox');
        this.txt_Enable = page.getByText('It\'s enabled!');
        this.txt_ItsDisable = page.getByText('It\'s disabled!');

    }

    async validateDynamicControls(){
        await expect(this.hd_DynamicControls).toBeInViewport();
        await expect(this.txt_ThisExample).toBeVisible();
        await expect(this.hd_RemoveAdd).toBeInViewport();
        await expect(this.hd_EnableDisable).toBeVisible();
        await expect(this.chk_A_CheckBox).toBeInViewport();
        await expect(this.btn_Remove).toBeEnabled();
        await expect(this.btn_Enable).toBeEnabled();
    }

    async validateRemoveNAddActivity(){
        await expect(this.btn_Remove).toBeEnabled();
        await this.btn_Remove.click({timeout: 5000});
        await expect(this.btn_Add).toBeVisible({timeout: 10000});
        await expect(this.txt_ItsGone).toBeVisible();
        await expect(this.chk_A_CheckBox).not.toBeVisible();
        await this.btn_Add.waitFor({state: 'visible'});
        await this.btn_Add.click({timeout: 5000});
        await expect(this.btn_Remove).toBeVisible({timeout: 10000});
        await expect(this.txt_ItsBack).toBeVisible();
        await expect(this.chk_A_CheckBox).toBeVisible();

    }

    async validateEnableActivity(){
        await expect(this.btn_Enable).toBeEnabled();
        await this.btn_Enable.click();
        await expect(this.btn_Disable).toBeVisible({timeout:15000});
        await expect(this.txt_Textbox).toBeEditable();
        await expect(this.txt_Enable).toBeVisible();
        await this.btn_Disable.waitFor({state: 'visible'});
        await this.btn_Disable.click({timeout: 5000});
        await expect(this.btn_Enable).toBeVisible({timeout: 10000});
        await expect(this.txt_Textbox).not.toBeEditable();
        await expect(this.txt_ItsDisable).toBeInViewport();
    }
}

/*

test('test', async ({ page }) => {
  await page.getByRole('button', { name: 'Disable' }).click();
  await page.getByText('It\'s disabled!').click();
});

*/