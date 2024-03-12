const puppeteer = require('puppeteer')

describe('My first Puppeteer test', function() {

    it('shold launch the browser', async function() {
        const browser = await puppeteer.launch({ headless: false})  //True runs the bowser in headless mode
        const page =     await browser.newPage()

        await page.goto('http://example.com/')

        //Check if element is visible like h1 tag

        await page.waitForSelector('h1')    // if it can't find this element then the test will fail.

        await browser.close() //


    })
})