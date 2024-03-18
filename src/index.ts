
import puppeteer from "puppeteer";
import {setTimeout}  from "node:timers/promises";


const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}

// let sleep_for = async (page: puppeteer.Page, min: number, max: number) => {

//     let sleep_duration = randomIntFromInterval(min, max);

//     console.log('waiting for sleep', sleep_duration / 1000, 'seconds')

// }

let main_actual =  async () => {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        const URL = 'https://twiiter.com/login'

        await page.setViewport({
            width: 1280, height: 720,
            deviceScaleFactor: 1,
        })

        await page.goto(URL, { waitUntil: 'networkidle2' })

        //await sleep_for(page, 1000, 2000)

        await setTimeout(5000);

    } catch (error) {
        console.log(error)
    }
}

let main = async ()     => {
    await main_actual();
}