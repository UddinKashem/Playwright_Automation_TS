import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { DropdownPage } from '../../pages/DropdownPage';


test('Validate Dropdown Page', async ({ page }) => {

    const homePage = new HomePage(page);
    const dropdownPage = new DropdownPage(page);

    homePage.gotoHomePage();
    await expect(homePage.lnk_Dropdown).toBeInViewport();
    await homePage.lnk_Dropdown.click();
    await page.waitForURL('https://the-internet.herokuapp.com/dropdown');
    dropdownPage.validateDropdown();
    await dropdownPage.selectOpt.selectOption('1');
    await expect(dropdownPage.selectOpt).toHaveValue('1');
    await dropdownPage.selectOpt.selectOption('2');
    await expect(dropdownPage.selectOpt).toHaveValue('2');


    //await page.pause();
})