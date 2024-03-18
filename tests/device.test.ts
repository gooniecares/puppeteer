import puppeteer, { Browser, Page } from 'puppeteer-core';
import { setTimeout } from 'node:timers/promises';
import { before, after, describe, it } from 'mocha';

import dotenv from 'dotenv'

dotenv.config()

// Define custom type for device object
interface CustomDevice {
    name: string;
    userAgent: string;
    viewport: {
        width: number;
        height: number;
    };
    deviceScaleFactor: number;
    isMobile: boolean;
    hasTouch: boolean;
    defaultViewport: {
        width: number;
        height: number;
    };
}

describe('Device Emulation TypeScript', () => {
    let browser: Browser;
    let page: Page;

    before(async () => {
        const pupConfig = {
            executablePath: process.env.CHROME_PATH, // Update with the correct path
            defaultViewport: null,
            args: [
                '--start-fullscreen'
            ],
            fullPage: true,
            headless: false,
            slowMo: 10,
            devtools: false,
        };

        browser = await puppeteer.launch(pupConfig);

        page = await browser.newPage();

        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
    });

    after(async () => {
        if (browser) {
            await browser.close();
        }
    });

    it('Full Screen Test', async () => {
        console.log('Test Device Full Screen');

        await page.goto('https://www.example.com', { waitUntil: 'networkidle2' });
        await setTimeout(3000);
    });

    it('Desktop Device Test', async () => {
        console.log('Test Device Desktop 1650 x 1050');

        await page.setViewport({ width: 1650, height: 1050 });
        await page.goto('https://www.example.com', { waitUntil: 'networkidle2' });
        await setTimeout(5000);
    });

    it('Tablet Device Test', async () => {
        console.log('Test Device Tablet iPad landscape');

        const tablet: CustomDevice = {
            name: 'iPad landscape',
            userAgent: '',
            viewport: {
                width: 1024,
                height: 768,
            },
            deviceScaleFactor: 1,
            isMobile: false,
            hasTouch: false,
            defaultViewport: {
                width: 1024,
                height: 768,
            },
        };

        await page.emulate(tablet);
        await page.goto('https://www.example.com', { waitUntil: 'networkidle2' });
        await setTimeout(5000);
    });

    it('Mobile Device Test', async () => {
        console.log('Test Device Mobile iPhone X');

        const mobile: CustomDevice = {
            name: 'iPhone X',
            userAgent: '',
            viewport: {
                width: 375,
                height: 812,
            },
            deviceScaleFactor: 3,
            isMobile: true,
            hasTouch: true,
            defaultViewport: {
                width: 375,
                height: 812,
            },
        };

        await page.emulate(mobile);
        await page.goto('https://www.example.com');
        await setTimeout(5000);
    });
});
