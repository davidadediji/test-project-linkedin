const {Builder, By} = require('selenium-webdriver');
var chai = require('chai');
const dotenv = require('dotenv')

dotenv.config();

let email = process.env.VALID_EMAIL;
let password = process.env.VALID_PASSWORD;

describe('LinkedIn Login', ()=>{
    it('should login with valid email and password', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.linkedin.com/login');
        await driver.findElement(By.id('username')).sendKeys(`${email}`);
        await driver.findElement(By.id('password')).sendKeys(`${password}`);
        await driver.findElement(By.className('btn__primary--large')).click();

        await driver.close();
    })
})