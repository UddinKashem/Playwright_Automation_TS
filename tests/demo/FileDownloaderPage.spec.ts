import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { FileDownloaderPage } from '../../pages/FileDownloaderPage';

test.describe('File Downloader Page Validation', () => {
    let homePage: HomePage;
    let filedownloaderPage: FileDownloaderPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        homePage.gotoHomePage();
        homePage.validateHomePage();
        homePage.navToFiledownloaderPage();
    });

    test('Validate File Downloader Page', async ({ page }) => {
        filedownloaderPage = new FileDownloaderPage(page);

        await filedownloaderPage.validteDownloadPage();
        await filedownloaderPage.downloadFile('sample.txt');
        // await filedownloaderPage.downloadFile();
        await filedownloaderPage.page.pause();
    });
});