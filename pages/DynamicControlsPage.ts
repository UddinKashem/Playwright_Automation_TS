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
}

/*

test('test', async ({ page }) => {
  await page.getByRole('heading', { name: 'Dynamic Controls' }).click();
  await page.getByText('This example demonstrates').click();
  await page.getByRole('heading', { name: 'Remove/add' }).click();
  await page.getByText('A checkbox').click();
  await page.getByRole('button', { name: 'Remove' }).click();
  await page.getByText('It\'s gone!').click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByText('It\'s back!').click();
  await page.getByText('A checkbox').click();
  await page.getByRole('heading', { name: 'Enable/disable' }).click();
  await page.getByRole('button', { name: 'Enable' }).click();
  await page.getByText('It\'s enabled!').click();
});

*/