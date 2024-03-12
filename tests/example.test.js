const puppeteer = require('puppeteer')
const {setTimeout} = require("node:timers/promises");

describe('My first Puppeteer test', function() {

    it('should launch the browser', async function() {
        //const browser = await puppeteer.launch({ headless: false})  //True runs the bowser in headless mode
        //const browser = await puppeteer.launch({ headless: false, slowMo: 500 })  //True runs the bowser in headless mode and in slowMo mode
        //const browser = await puppeteer.launch({ headless: true, slowMo: 500 })  //True runs the bowser silently in headless mode and in slowMo mode
        //const browser = await puppeteer.launch({ headless: false, slowMo: 10, devtools: true })  //True runs the bowser with console dev tools opened.
        const browser = await puppeteer.launch({ headless: false, slowMo: 10, devtools: false })  //True runs the bowser with console dev tools closed.

        const page =     await browser.newPage()

        await page.goto('http://example.com/')

        // Pause for three seconds              << doesn't work
        //await page.waitForTimeout(3000)       << doesn't work
        //await page.waitFor(3000)              << doesn't work
        //waitFor(3000)                         << doesn't work
        await setTimeout(3000);

        //Check if element is visible like h1 tag

        await page.waitForSelector('h1')    // if it can't find this element then the test will fail.

        //await browser.reload()  //
        await page.evaluate(() => {
            location.reload(true)
        })

        await setTimeout(3000);

        await page.waitForSelector('h1')

        await browser.close()   //


    })
})

