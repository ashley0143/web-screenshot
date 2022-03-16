//for bundle version see bundle diroctery

let fs = require("node:fs");
require("chromedriver");
const { Builder } = require("selenium-webdriver");
let shot = require("../src/screenshot/shot.js");

module.exports = async function takeScreenshot(url,path) {
  let driver = await new Builder().forBrowser("chrome").build();
 
  await driver.get(url);
 
  let image = await shot(driver)
 
  await fs.writeFileSync(path, image, "base64");
  await driver.quit();
}
