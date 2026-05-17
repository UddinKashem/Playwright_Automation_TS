import { expect, type Page, type Locator } from '@playwright/test';

export class FloatingMenuPage{

    readonly page: Page;
    readonly hd_FloatingMenu: Locator;
    readonly lnk_Home: Locator;
    readonly lnk_News: Locator;
    readonly lnk_Contact: Locator;
    readonly lnk_About: Locator;


    constructor(page: Page){
        this.page = page;
        this.hd_FloatingMenu = page.getByRole('heading', { name: 'Floating Menu' });
        this.lnk_Home = page.getByRole('link', { name: 'Home' });
        this.lnk_News = page.getByRole('link', { name: 'News' });
        this.lnk_Contact = page.getByRole('link', { name: 'Contact' });
        this.lnk_About = page.getByRole('link', { name: 'About' });

    }

    async validateFloatingMenuPage(){
        await expect(this.hd_FloatingMenu).toBeVisible({timeout: 15000});
        await expect(this.lnk_Home).toBeEnabled();
        await expect(this.lnk_News).toBeEnabled();
        await expect(this.lnk_Contact).toBeEnabled();
        await expect(this.lnk_About).toBeEnabled();
    }
}

/*
test('test', async ({ page }) => {
  await page.getByRole('heading', { name: 'Floating Menu' }).click();
  await page.getByRole('link', { name: 'News' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByText('Saepe ullam laudantium ex').click();
});

*/