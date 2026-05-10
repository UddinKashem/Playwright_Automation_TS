import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { DisappearingElementsPage } from '../../pages/DisappearingElementsPage';


test('Validate Disappearing Elements page', async ({ page }) => {
    const homePage = new HomePage(page);
    const disappearingElementsPage = new DisappearingElementsPage(page);


    homePage.gotoHomePage();
    await expect(homePage.lnk_Disappearing_Elements).toBeEnabled();
    homePage.lnk_Disappearing_Elements.click();
    await expect(page.getByRole('heading', { name: 'Disappearing Elements' })).toBeInViewport();
    await expect(page.getByText('This example demonstrates')).toBeEnabled();
    await expect(disappearingElementsPage.lnk_Home).toBeEnabled();
    await disappearingElementsPage.lnk_Home.click();
    homePage.validateHomePage();
    homePage.lnk_Disappearing_Elements.click();
    await expect(disappearingElementsPage.lnk_About).toBeVisible();
    await disappearingElementsPage.lnk_About.click();
    await expect(page.getByRole('heading', { name: 'Not Found' })).toBeInViewport();
    await page.goto('https://the-internet.herokuapp.com/disappearing_elements');
    await page.waitForURL('https://the-internet.herokuapp.com/disappearing_elements');
    await expect(disappearingElementsPage.lnk_ContracttUs).toBeEnabled();
    await disappearingElementsPage.lnk_ContracttUs.click();
    await expect(page.getByRole('heading', { name: 'Not Found' })).toBeInViewport();
    await page.goto('https://the-internet.herokuapp.com/disappearing_elements');
    await page.waitForURL('https://the-internet.herokuapp.com/disappearing_elements');
    await expect(disappearingElementsPage.lnk_Gallery).toBeVisible();
    await disappearingElementsPage.lnk_Gallery.click();
    await expect(page.getByRole('heading', { name: 'Not Found' })).toBeInViewport();
    await page.goto('https://the-internet.herokuapp.com/disappearing_elements');
    await page.waitForURL('https://the-internet.herokuapp.com/disappearing_elements');
    await expect(disappearingElementsPage.lnk_Portfolio).toBeVisible();
    await disappearingElementsPage.lnk_Portfolio.click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/portfolio/');
    await expect(page.getByRole('heading', { name: 'Not Found' })).toBeInViewport();

    //await page.pause();
});