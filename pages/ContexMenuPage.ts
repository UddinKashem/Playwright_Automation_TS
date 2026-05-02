import { type Page, type Locator} from '@playwright/test';

export class ContexMenuPage {
    [x: string]: any;

    readonly page: Page;
    readonly hs_contexMenu: Locator;
    readonly hd_ContexMenu: Locator;

    constructor (page: Page){
        this.page = page;
        this.hd_ContexMenu = page.getByRole('heading', { name: 'Context Menu' });
        this.hs_contexMenu = page.locator('#hot-spot');

    }
}

/*
test('test', async ({ page }) => {
  await page.getByRole('link', { name: 'Context Menu' }).click();
  await page.getByRole('heading', { name: 'Context Menu' }).click();
  await page.getByText('Right-click in the box below').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#hot-spot').click({
    button: 'right'
  });
  await page.locator('#hot-spot').click();
  await page.locator('#hot-spot').hover();
  await page.locator('#hot-spot').dblclick();
  await page.locator('#hot-spot').click();
});

*/