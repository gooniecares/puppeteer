const puppeteer = require('puppeteer')
const {setTimeout} = require("node:timers/promises");

describe('My first Puppeteer test', function() {

    it('Browser should launch?', async function() {

        const browser = await puppeteer.launch({ headless: false, slowMo: 10, devtools: false })  //True runs the bowser with console dev tools closed.

        const page = await browser.newPage()


        await page.goto('https://devexpress.github.io/testcafe/example/')


        //await page.waitForSelector('developer-name')    // if it can't find this element then the test will fail.
        //await page.type('#developer-name', 'Michael Sphinx,')    // if it can't find this element then the test will fail.

        await page.type('#developer-name', 'Michael Sphinx ', { delay: 200 })

        await setTimeout(5000);

        await page.evaluate(() => {
            location.reload(true)
        })
        await page.goto('https://example.com')

        await page.waitForSelector('h1')

        await setTimeout(2000);

        await page.goBack()

        await setTimeout(200);

        await page.type('#developer-name', '')

        await setTimeout(200);

        await page.type('#developer-name', 'TestUser Click', { delay: 200 })

        await page.click('#reusing-js-code', { clickCount: 1 })

        await page.click('input#windows', { clickCount: 1 })

        await page.select("#preferred-interface", 'JavaScript API')

        await setTimeout(5000);


        //await browser.close()   //


    })
})

// describe('My first Puppeteer test', function() {

//     it('Browser should launch?', async function() {
//         //const browser = await puppeteer.launch({ headless: false})  //True runs the bowser in headless mode
//         //const browser = await puppeteer.launch({ headless: false, slowMo: 500 })  //True runs the bowser in headless mode and in slowMo mode
//         //const browser = await puppeteer.launch({ headless: true, slowMo: 500 })  //True runs the bowser silently in headless mode and in slowMo mode
//         //const browser = await puppeteer.launch({ headless: false, slowMo: 10, devtools: true })  //True runs the bowser with console dev tools opened.
//         //const browser = await puppeteer.launch({ headless: false, slowMo: 250, devtools: false })  //250 runs super slow
//         const browser = await puppeteer.launch({ headless: false, slowMo: 10, devtools: false })  //True runs the bowser with console dev tools closed.

//         const page =     await browser.newPage()


//         await page.goto('https://devexpress.github.io/testcafe/example/')


//         //await page.waitForSelector('developer-name')    // if it can't find this element then the test will fail.
//         //await page.type('#developer-name', 'Michael Sphinx,')    // if it can't find this element then the test will fail.
//         await page.type('#developer-name', 'Michael Sphinx', { delay: 200 })

//         await setTimeout(5000);

//         await page.evaluate(() => {
//             location.reload(true)
//         })
//         await page.goto('https://example.com')

//         await page.waitForSelector('h1')

//         await setTimeout(5000);

//         await page.goBack()

//         await setTimeout(200);

//         await page.type('#developer-name', '')

//         await page.type('#developer-name', 'Change Mindstate', { delay: 200 })

//         await setTimeout(5000);


//         await browser.close()   //


//     })
// })

// describe('My first Puppeteer test', function() {

//     it('Browser should launch?', async function() {
//         //const browser = await puppeteer.launch({ headless: false})  //True runs the bowser in headless mode
//         //const browser = await puppeteer.launch({ headless: false, slowMo: 500 })  //True runs the bowser in headless mode and in slowMo mode
//         //const browser = await puppeteer.launch({ headless: true, slowMo: 500 })  //True runs the bowser silently in headless mode and in slowMo mode
//         //const browser = await puppeteer.launch({ headless: false, slowMo: 10, devtools: true })  //True runs the bowser with console dev tools opened.
//         const browser = await puppeteer.launch({ headless: false, slowMo: 250, devtools: false })  //True runs the bowser with console dev tools closed.

//         const page =     await browser.newPage()

//         await page.goto('http://example.com/')
        

//         // Pause for three seconds              << doesn't work
//         //await page.waitForTimeout(3000)       << doesn't work
//         //await page.waitFor(3000)              << doesn't work
//         //waitFor(3000)                         << doesn't work
//         //await setTimeout(2000);

//         //Check if element is visible like h1 tag

//         await page.waitForSelector('h1')    // if it can't find this element then the test will fail.

//         await page.goto('http://dev.to/')

//         //await browser.reload()  //
//         await page.evaluate(() => {
//             location.reload(true)
//         })


//        // await setTimeout(2000);

//         await page.waitForSelector('#topbar')

//         await page.goBack()

//         //await setTimeout(2000);

//         await page.waitForSelector('h1')

//         await page.goForward()

//         //await setTimeout(2000);

//         await page.waitForSelector('#topbar')

//         await browser.close()   //


//     })
// })

