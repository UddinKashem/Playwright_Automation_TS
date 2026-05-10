import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { DragNDropPage } from '../../pages/DragNDropPage';

test('Validate Drag and Drop Page', async ({page}) => {
    const homePage = new HomePage(page);
    const dragNDropPage = new DragNDropPage(page);

    homePage.gotoHomePage();
    await expect(homePage.lnk_Drag_and_Drop).toBeEnabled();
    await homePage.lnk_Drag_and_Drop.click();
    await page.waitForURL('https://the-internet.herokuapp.com/drag_and_drop');
    await expect(dragNDropPage.hd_DragNDrop).toBeVisible();
    await expect(dragNDropPage.d_loc_A).toBeEnabled();
    await expect(dragNDropPage.d_loc_B).toBeEnabled();


    //await page.pause();
});
