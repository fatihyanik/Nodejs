const puppeteer= require('puppeteer');
const path = require('path');
describe('end to end test for page index.html',  () => {
    test('check if the value is right', async () => {
        const browser = await puppeteer.launch({
        headless: false,
        slowMo: 200,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('file://' + path.join(__dirname, '../index.html' ));
    await page.click('input#inp1');
    await page.type('input#inp1', '147');
    await page.click('input#inp2');
    await page.type('input#inp2', '3');
    await page.click('button#btn1');

    const result = await page.$eval('#result', el => el.textContent)
    
    expect(result).toBe('150')
    await page.close();
    }, 20000)
    
})