import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ContexMenuPage } from '../../pages/ContexMenuPage';


test('validate context menu page', async ({ page }) => {

    const homePage = new HomePage(page);
    const contextMenuPage = new ContexMenuPage(page);

    homePage.gotoHomePage();
    // homePage.navToContextMenu();

    homePage.lnk_Context_Menu.click();
    await expect(contextMenuPage.hd_ContexMenu).toBeVisible();
    await expect(page.getByText(/Right-click in the box below/)).toBeVisible();
    await page.getByText('Right-click in the box below').click();
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
    await contextMenuPage.hs_contexMenu.click();
    await contextMenuPage.hs_contexMenu.click({ button: 'right' });
<<<<<<< HEAD
    await page.screenshot({ path: `screenshots/full-page-${Date.now()}.png`, fullPage: true });
    await page.screenshot({ path: '/screenShots/contextSSf.png', fullPage: true });
    const ele_Context = await contextMenuPage.hs_contexMenu;
    await ele_Context.screenshot({ path: `/screenshots/contentMenu-${Date.now()}.png` });
    await ele_Context.screenshot({ path: '/screenShots/contextSS.png' });
=======
    await page.screenshot({path:'C:\\Playwright\\Playwright_Automation\\screenShots\\contextSSf.png', fullPage:true});
    const ele_Context = await contextMenuPage.hs_contexMenu;
    await ele_Context.screenshot({path:'C:\\Playwright\\Playwright_Automation\\screenShots\\contextSS.png'});
>>>>>>> 7961b75934baa285494cb7ffb9d2276a52b40272
    await contextMenuPage.hs_contexMenu.click();
    await contextMenuPage.hs_contexMenu.hover();
    await contextMenuPage.hs_contexMenu.dblclick();
    await contextMenuPage.hs_contexMenu.click();

    //await page.pause();
});
