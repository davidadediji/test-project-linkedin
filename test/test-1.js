const {Builder, By} = require('selenium-webdriver');
var chai = require('chai');


describe('LinkedIn Login', ()=>{
    it('should login with valid email and password', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.linkedin.com/login');
        await driver.findElement(By.id('username')).sendKeys('');
        await driver.findElement(By.id('password')).sendKeys('');

        let confirmLogin = await driver.findElement(By.id())

        await driver.close();
    })
})