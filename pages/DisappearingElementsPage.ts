import { expect, type Page, type Locator } from '@playwright/test';

export class DisappearingElementsPage{
    readonly page: Page;
    readonly hd_DisappearingElements: Locator;
    readonly lnk_Home: Locator;
    readonly lnk_About: Locator;
    readonly lnk_ContracttUs: Locator;
    readonly lnk_Portfolio: Locator;
    readonly lnk_Gallery: Locator;

    constructor(page: Page){
        this.page =  page;
        this.hd_DisappearingElements = page.getByRole('heading', { name: 'Disappearing Elements' });
        this.lnk_Home =  page.getByRole('link', { name: 'Home'});
        this.lnk_About = page.getByRole('link', {name: 'About'});
        this.lnk_ContracttUs = page.getByRole('link', { name: 'Contact Us' });
        this.lnk_Portfolio = page.getByRole('link', { name: 'Portfolio' });
        this.lnk_Gallery = page.getByRole('link', { name: 'Gallery' });
      
    }

}