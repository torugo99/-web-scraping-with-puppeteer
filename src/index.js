const pup = require('puppeteer')
const fs = require('fs');

const url = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops';
const searchFor = "Lenovo";

const Result = [];

(async () => {
    const browser = await pup.launch({headless: true});
    const page = await browser.newPage();
    console.log('Accessing the browser 🌐...');

    await page.goto(url);
    console.log(`Searching all devices with ${searchFor} name 🔎...`);
    
    const devices = await page.$$eval('a.title', 
    element => element.map(device_url => device_url.href));
      
    for(const device_url of devices) {
        await page.goto(device_url);

        const description = await page.$eval('p.description', element => element.innerText);
        const price = await page.$eval('h4.pull-right', element => element.innerText);
        const memorys = await page.$eval('div.swatches', element => element.innerText);
        const memorys_unavailable = await page.$eval('button.btn.swatch.disabled', element => element.innerText);

        const obj = {};
        obj.name_and_description = description;
        obj.price = price;
        obj.memorys = {
            memorys,
            memorys_unavailable
        };
        obj.url = device_url;        

        Result.push(obj);
        
        fs.writeFileSync('docs/export.json', JSON.stringify(Result));
        
        console.log(Result);
    }
    
  await browser.close();

})();
