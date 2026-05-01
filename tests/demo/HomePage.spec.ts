// tests/homepage.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('validate home page', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.gotoHomePage();

  await expect(page.getByText('Welcome')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
  await expect(homePage.lnk_A_B_Testing).toBeEnabled();
  await expect(homePage.lnk_Add_Remove_Elements).toBeEnabled();
  await expect(homePage.lnk_Basic_Auth).toBeEnabled();
  await expect(homePage.lnk_Broken_Images).toBeEnabled();
  await expect(homePage.lnk_Challenging_DOM).toBeEnabled();
  await expect(homePage.lnk_Checkboxes).toBeEnabled();
  await expect(homePage.lnk_Context_Menu).toBeEnabled();
  await expect(homePage.lnk_Digest_Authentication).toBeEnabled();
  await expect(homePage.lnk_Disappearing_Elements).toBeEnabled();
  await expect(homePage.lnk_Drag_and_Drop).toBeInViewport();
  await expect(homePage.lnk_Dropdown).toBeInViewport();
  await expect(homePage.lnk_Dynamic_Content).toBeInViewport();
  await expect(homePage.lnk_Dynamic_Controls).toBeInViewport();
  await expect(homePage.lnk_Dynamic_Loading).toBeInViewport();
  await expect(homePage.lnk_Entry_Ad).toBeInViewport();
  await expect(homePage.lnk_Exit_Intent).toBeInViewport();
  await expect(homePage.lnk_File_Download).toBeEnabled();
  await expect(homePage.lnk_File_Upload).toBeEnabled();
  await expect(homePage.lnk_Floating_Menu).toBeEnabled();
  await expect(homePage.lnk_Forgot_Password).toBeEnabled();
  await expect(homePage.lnk_Form_Authentication).toBeEnabled();
  await expect(homePage.lnk_Frames).toBeEnabled();
  await expect(homePage.lnk_Geolocation).toBeEnabled();
  await expect(homePage.lnk_Horizontal_Slider).toBeEnabled();
  await expect(homePage.lnk_Hovers).toBeEnabled();
  await expect(homePage.lnk_Infinite_Scroll).toBeEnabled();
  await expect(homePage.lnk_Inputs).toBeEnabled();
  await expect(homePage.lnk_JQuery_UI_Menus).toBeEnabled();
  await expect(homePage.lnk_Key_Presses).toBeEnabled();
  await expect(homePage.lnk_Multiple_Windows).toBeEnabled();
  await expect(homePage.lnk_Nested_Frames).toBeEnabled();
  await expect(homePage.lnk_Notification_Messages).toBeEnabled();
  await expect(homePage.lnk_Shadow_DOM).toBeEnabled();
  await expect(homePage.lnk_Shifting_Content).toBeEnabled();
  await expect(homePage.lnk_Slow_Resources).toBeEnabled();
  await expect(homePage.lnk_Sortable_Data_Tables).toBeEnabled();
  await expect(homePage.lnk_Status_Codes).toBeEnabled();
  await expect(homePage.lnk_Typos).toBeEnabled();
  await expect(homePage.lnk_WYSIWYG_Editor).toBeEnabled();

  //await page.pause();
});