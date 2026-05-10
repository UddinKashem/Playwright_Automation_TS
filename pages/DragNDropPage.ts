import { expect, type Page, type Locator } from '@playwright/test';

export class DragNDropPage{

    readonly page: Page;
    readonly hd_DragNDrop: Locator;
    readonly d_loc_A: Locator;
    readonly d_loc_B: Locator;

    constructor(page: Page){
        this.page = page;
        this.hd_DragNDrop =  page.getByRole('heading', { name: 'Drag and Drop' });
        this.d_loc_A = page.locator('#column-a');
        this.d_loc_B = page.locator('#column-b');

    }
}