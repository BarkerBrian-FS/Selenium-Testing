const {Builder, By, Key, until} = require("selenium-webdriver");


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
        await driver.get(process.env.url2);
        await driver.getTitle().then(title => {
            expect(title).toEqual('Contact Us')
        })
        await setDelay();
    })
})

