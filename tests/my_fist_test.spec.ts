import {test, expect} from '@playwright/test';

test('Demo test', async ({page, browserName}) =>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.waitForSelector('#input-firstname', {state: 'visible', timeout: 5000});
})

