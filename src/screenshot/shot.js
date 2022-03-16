/*
* A basic function to
* Screenshot an image
*/
async function screenshot(driver){
    let image = await driver.takeScreenshot();
    return image
}

module.exports = screenshot
