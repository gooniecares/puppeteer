const puppeteer = require('puppeteer')
const {setTimeout} = require("node:timers/promises");

describe('Device Emulation', () => {
    let browser
    let page


    before(async function() {

        const pupConfig = {
            defaultViewport: null,
            args:[
                //'--start-maximized' // you can also use '--start-fullscreen'
                '--start-fullscreen' // you can also use '--start-maximized'
            ],
            fullPage: true,
            headless: false,
            slowMo: 10,
            devtools: false,
        }

        browser = await puppeteer.launch(pupConfig)

        page = await browser.newPage()

        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(20000)
    })

    after(async function() {
        await browser.close()
    })

    beforeEach(async function(){
        // Runs after test File
    })

    afterEach(async function() {
        // Runs after each test step
    })

    it('Full Screen Test', async function() {

        console.log('Test Device Full Screen')

        await page.goto('https://www.example.com', {waitUntil: 'networkidle2'})
        await setTimeout(3000);

    })

    it('Desktop Device Test', async function() {
        // TODO: test

        console.log('Test Device Desktop 1650 x 1050')

        await page.setViewport({ width: 1650, height: 1050 })
        await page.goto('https://www.example.com', {waitUntil: 'networkidle2'})
        await setTimeout(5000); // await 5 seconds
    })

    it('Tablet Device Test', async function() {
        console.log('Test Device Tablet iPad landscape')

        const tablet = puppeteer.KnownDevices['iPad landscape']
        await page.emulate(tablet)
        await page.goto('https://www.example.com', {waitUntil: 'networkidle2'})
        await setTimeout(5000); // await 5 seconds
    })

    it('Mobile Device Test', async function() {

        console.log('Test Device Mobile iPhone X')

        const mobile = puppeteer.KnownDevices['iPhone X']
        await page.emulate(mobile)
        await page.goto('https://www.example.com')
        await setTimeout(5000); // await 5 seconds
    })

})