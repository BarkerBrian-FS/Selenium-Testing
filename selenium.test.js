const { Builder, By, Key, util } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
require('dotenv').config()

describe("", () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    })

    afterAll(async () => {
        await driver.quit()
    })

    const setDelay = async () => {
        await driver.sleep(1000)
    }

    it('As a user I want to open localhost:3000/', async () => {
        await driver.get(process.env.url);
        await driver.getTitle().then(title => {
            expect(title).toEqual('Home')
        })
        await setDelay();
    })

    it('As a user I want to open localhost:3000/contact', async () => {
        await driver.get(process.env.urltwo);
        await driver.getTitle().then(title => {
            expect(title).toEqual('Contact Us')
        })
        await setDelay();
    })

    it ('As a user I want to sign up and recieve confirmation', async () => {
        await driver.findElement(By.id("formInput")).sendKeys("brian@brian.com");
        button = await driver.findElement(By.id('formSubmit'));
        await driver.execute_script("arguments[0].click();", button);
        await driver.findElement(By.id('formMessage')).then(text => {
            expect(text).Equal('More info coming to brian@brian.com')
        })

    })
})

