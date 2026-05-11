import { expect, type Page, type Locator } from '@playwright/test';

export class DropdownPage {

    readonly page: Page;
    readonly hd_DropdownList: Locator;
    readonly selectOpt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hd_DropdownList = page.getByRole('heading', { name: 'Dropdown List' });
        this.selectOpt = page.locator('#dropdown');
    }

    async validateDropdown() {
        await expect(this.hd_DropdownList).toBeVisible();
        await expect(this.selectOpt).toBeVisible();
    }

}



/*
test('test', async ({ page }) => {
  await page.getByRole('link', { name: 'Dropdown' }).click();
  await page.getByRole('heading', { name: 'Dropdown List' }).click();
  await page.locator('#dropdown').selectOption('1');
  await page.locator('#dropdown').selectOption('2');
});

*/