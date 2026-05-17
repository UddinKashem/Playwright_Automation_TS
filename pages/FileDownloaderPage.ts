import { expect, type Page, type Locator } from "@playwright/test";


export class FileDownloaderPage {


    readonly page: Page;
    readonly hd_FileDLoader: Locator;
    readonly lnk_file_txt: Locator;
    // readonly lnk_file_pdf: Locator;


    constructor(page: Page) {
        this.page = page;
        this.hd_FileDLoader = page.getByRole('heading', { name: 'File Downloader' });
        this.lnk_file_txt = page.getByRole('link', { name: 'sample.txt', exact: true });
        // this.lnk_file_pdf = page.getByRole('link', { name: 'contract-20pages.pdf' });

    }

    async validteDownloadPage() {
        await expect(this.hd_FileDLoader).toBeVisible();
        // await expect(this.lnk_file_pdf).toBeEnabled();
        await expect(this.lnk_file_txt).toBeEnabled();
    }

    async downloadFile(fileName: string) {
        //await this.page.pause();
        await expect(this.page.getByRole('link', { name: fileName, exact: true })).toBeEnabled();
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('link', { name: fileName, exact: true }).click();
        const download = await downloadPromise;

    }

}

/*
test('test', async ({ page }) => {
  await page.getByRole('heading', { name: 'Forgot Password' }).click();
  await page.getByText('E-mail').click();
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('button', { name: 'Retrieve password' }).click();
});
*/