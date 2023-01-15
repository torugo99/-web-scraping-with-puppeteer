const pup = require('puppeteer')

const url = "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops";
const searchFor = "unknown";

(async () => {
    const browser = await pup.launch({headless: true});
    const page = await browser.newPage();
    console.log('Accessing the browser 🌐...');

    await page.goto(url);
    console.log(`Searching all devices with ${searchFor} name 🔎...`);


    await Promise.all([
        page.waitForNavigation(),
        page.click('a.title')
    ]);

    const device = await page.$$eval('a.title', 
    element => element.map(device_desc => device_desc.textContent));


    
    const price = await page.evaluate(() => 
    Array.from(document.querySelectorAll('h4.pull-right'))
    .map(element => element.innerText));

    const description = await page.evaluate(() => 
    Array.from(document.querySelectorAll('p.description'))
    .map(description => description.innerText));

    const memory = await page.evaluate(() => 
    Array.from(document.querySelectorAll('div.swatches'))
    .map(memory => memory.innerText));

    console.log(memory);
    
    //await browser.close();
})();