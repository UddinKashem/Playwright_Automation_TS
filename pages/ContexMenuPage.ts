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