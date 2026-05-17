import { expect, type Page, type Locator } from '@playwright/test';

export class NestedFramesPage {

    readonly page: Page;
    readonly hd_Frames: Locator;
    readonly lnk_NestedFrames: Locator;
    readonly lnk_iFrames: Locator;
    readonly frame_Left: Locator;
    readonly frame_Middle: Locator;
    readonly frame_Right: Locator;
    readonly frame_Bottom: Locator;
    readonly hd_iFrame: Locator;
    readonly txt_TinyMCE: Locator;
    readonly txt_FrameContent: Locator;
    readonly txt_PaymentMethod: Locator;
    readonly btn_Close: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hd_Frames = page.getByRole('heading', { name: 'Frames' });
        this.lnk_NestedFrames = page.getByRole('link', { name: 'Nested Frames' });
        this.lnk_iFrames = page.getByRole('link', { name: 'iFrame' });
        this.frame_Left = page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-left"]').contentFrame().getByText('LEFT');
        this.frame_Middle = page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-middle"]').contentFrame().locator('body');
        this.frame_Right = page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-right"]').contentFrame().getByText('RIGHT');
        this.frame_Bottom = page.locator('frame[name="frame-bottom"]').contentFrame().getByText('BOTTOM');
        this.hd_iFrame = page.getByRole('heading', { name: 'An iFrame containing the' });
        this.txt_TinyMCE = page.getByText('TinyMCE is in read-only mode');
        this.txt_FrameContent = page.locator('iframe[title="Rich Text Area"]').contentFrame().getByText('Your content goes here.');
        this.txt_PaymentMethod = page.getByText('Please request that the admin upgrade your plan or add a valid payment method');
        this.btn_Close = page.getByRole('button', { name: 'Close' });
    }

    async validateFramesPage(){
        await expect(this.hd_Frames).toBeVisible();
        await expect(this.lnk_NestedFrames).toBeEnabled();
        await expect(this.lnk_iFrames).not.toBeHidden();
    }

    async validateNestedFrames(){
        await expect(this.lnk_NestedFrames).toBeEnabled({timeout: 15000});
        await this.lnk_NestedFrames.click();
        await this.page.waitForURL('https://the-internet.herokuapp.com/nested_frames');
        await expect(this.frame_Left).toBeVisible();
        await expect(this.frame_Middle).toBeEnabled();
        await expect(this.frame_Left).toBeInViewport();
        await expect(this.frame_Bottom).not.toBeDisabled();
    }

    async validateiFrames(){
        await expect(this.lnk_iFrames).toBeEnabled({timeout: 15000});
        await this.lnk_iFrames.click();
        await this.page.waitForURL('https://the-internet.herokuapp.com/iframe');
        await expect(this.hd_iFrame).toBeVisible();
        await expect(this.txt_FrameContent).not.toBeDisabled();
        await expect(this.txt_TinyMCE).toBeInViewport();
        await expect(this.txt_PaymentMethod).toBeVisible();
        await expect(this.btn_Close).toBeEnabled();
    } 
}