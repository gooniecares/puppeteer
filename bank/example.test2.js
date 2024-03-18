const puppeteer = require('puppeteer')
var assert = require('assert');

// var chai = require('chai');
// var should = chai.should();


//const chai = require('chai');

//const expect = require('chai').expect;

//var expect = chai.expect();


//const expect = require('chai/register-expect');


// const expect = require('chai').expect;
//import { expect } from 'chai';
//var assert = require('chai').assert;
// const chai = require('chai');
// const expect = chai.expect;

const {setTimeout} = require("node:timers/promises");

describe('My first Puppeteer test', function() {

    it('Browser should launch and go to several pages click navigate and come back?', async function() {
        const Null = "";

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

        //  await page.type('#developer-name', '')  // Attempting to delete text but only sometimes works and sometimes appends text

        await setTimeout(200);

        //await page.$eval( () => document.getElementById("#developer-name").value = Null)

        // const inputValue = await page.$eval('#developer-name', cssEl => cssEl.value);
        // // focus on the input field for selection purposes
        //     await page.click('#developer-name');
        //     for (let i = 0; i < inputValue.length; i++) {
        //     await page.keyboard.press('Backspace');
        // }

        const inputValue = await page.$('#developer-name');
        await inputValue.click({ clickCount: 3 })

        await setTimeout(200);

        await inputValue.type("");


        await setTimeout(200);

        await page.type('#developer-name', 'TestUser Click', { delay: 200 })

        await page.click('#reusing-js-code', { clickCount: 1 })

        await page.click('input#windows', { clickCount: 1 })

        await page.select("#preferred-interface", 'JavaScript API')

        const title = await page.title()

        const url = await page.url()

        console.log('title', title)

        console.log('url', url)

        const text = await page.$eval('header p', cssel => cssel.textContent)

        console.log('text', text)


        const countPs = await page.$$eval('p', cssel => cssel.length)

        console.log('countPs = ', countPs)

        await setTimeout(5000);

        // Now running expect
        //  expect(title).to.a('string', 'Example Domain');         //  Deprecated will not work

        // Now Running Assert To compensate for deprecation of expect
        assert.equal(title, 'TestCafe Example Page')

        assert.equal(url, 'https://devexpress.github.io/testcafe/example/')

        // Now Append on to the next page

            console.log('// Now Append on to the next page');

        await page.goto('http://zero.webappsecurity.com/index.html')

        await page.waitForSelector('#searchTerm')

        //await page.type('#searchTerm', 'Hello World And Everything Else')
        await page.type('#searchTerm', 'Hello World')

        await page.keyboard.press('Enter', { dealy: 10 })

        //await page.waitFor(500)               // Doesn't Work
        //await page.waitForResponse(500)       // Doesn't Work
        await setTimeout(300);

        await page.goBack()

        await setTimeout(300);

        await page.goto('https://example.com')

        await page.waitForSelector('h1')

        console.log('Passed with h1 Found')

        await setTimeout(300);

        const Newtitle = await page.title()

        const NewUrl = await page.url()

        console.log('Newtitle', Newtitle)

        console.log('NewUrl', NewUrl)

        //assert.equal(title, 'TestCafe Example Page')

        //  await page.goto('http://zero.webappsecurity.com/index.html')


        console.log('Done Waiting For Response okay to Close Browser Now...');
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

