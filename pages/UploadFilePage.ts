import { expect, type Page, type Locator } from '@playwright/test';

export class UploadFilePage{

    readonly page: Page;
    readonly hd_FileUploader: Locator;
    readonly txt_file_Sys: Locator;
    readonly btn_ChooseFile: Locator;
    readonly btn_Upload: Locator;
    readonly loc_dragNDrop: Locator;

    constructor(page: Page){
        this.page = page;
        this.hd_FileUploader = page.getByRole('heading', { name: 'File Uploader' });
        this.txt_file_Sys = page.getByText('Choose a file on your system');
        this.btn_ChooseFile = page.getByRole('button', { name: 'Choose File' });
        this.btn_Upload = page.getByRole('button', { name: 'Upload' });
        this.loc_dragNDrop = page.locator('#drag-drop-upload');

    }

    async validateFileUploadPage(){
        await expect(this.hd_FileUploader).toBeVisible({ timeout: 15000 });
        await expect(this.txt_file_Sys).toBeVisible();
        await expect(this.btn_ChooseFile).toBeVisible();
        await expect(this.loc_dragNDrop).toBeInViewport();
    }
}