const puppeteer = require('puppeteer');

async function alphakeysGetProducts() {
    const url = 'https://alphakeys.ca';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const products = await page.evaluate(() => {

    });
    await browser.close();
    return products;
}
module.exports = {
    alphakeysGetProducts
}