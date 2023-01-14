const pup = require('puppeteer')

const url = "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops";
const searchFor = "unknown";

(async () => {
    const browser = await pup.launch({headless: true});
    const page = await browser.newPage();
    console.log('Accessing the browser 🌐...');

    await page.goto(url);
    console.log(`Searching all devices with ${searchFor} name 🔎...`);

    const device = await page.$$eval('div.col-md-9 div.col-sm-4 div.thumbnail div.caption a.title', element => element.map(device_desc => device_desc.textContent));
    console.log(device)  
    
    await page.waitForFileChooser(1000);
    await browser.close();
})();