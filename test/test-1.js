const {Builder, By} = require('selenium-webdriver');
var chai = require('chai');
const dotenv = require('dotenv')

dotenv.config();

let email = process.env.VALID_EMAIL;
let password = process.env.VALID_PASSWORD;
let wrongEmail = process.env.INVALID_EMAIL;
let invalidPassword = process.env.INVALID_PASSWORD;
let phoneNoCode = process.env.PHONE_NO_COUNTRY_CODE;
let phoneCode = process.env.PHONE_COUNTRY_CODE;


describe('LinkedIn Login', ()=>{ 
    it('should throw an error when all field is blank', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.linkedin.com/login');
        await driver.findElement(By.id('username')).sendKeys(``);
        await driver.findElement(By.id('password')).sendKeys(``);
        await driver.findElement(By.className('btn__primary--large')).click();
        
        let newtext = await driver.findElement(By.id("error-for-username")).getText().then((value)=>value)
        chai.expect(newtext).to.eql('Please enter an email address or phone number');
        await driver.close();
    })
    it('should login with valid credentials', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.linkedin.com/login');
        await driver.findElement(By.id('username')).sendKeys(`${email}`);
        await driver.findElement(By.id('password')).sendKeys(`${password}`);
        await driver.findElement(By.className('btn__primary--large')).click();

        await driver.close();
    })
    it('should not login with wrong email,valid password', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.linkedin.com/login');
        await driver.findElement(By.id('username')).sendKeys(`${wrongEmail}`);
        await driver.findElement(By.id('password')).sendKeys(`${password}`);
        await driver.findElement(By.className('btn__primary--large')).click();
        
        let newtext = await driver.findElement(By.id("error-for-password")).getText().then((value)=>value)
        chai.expect(newtext).to.eql("That's not the right password. Try again or sign in with a one-time link");
        await driver.close();
    })

    it('should not login with valid email, invalid password', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.linkedin.com/login');
        await driver.findElement(By.id('username')).sendKeys(`${email}`);
        await driver.findElement(By.id('password')).sendKeys(`${invalidPassword}`);
        await driver.findElement(By.className('btn__primary--large')).click();
        
        let newtext = await driver.findElement(By.id("error-for-username")).getText().then((value)=>value)
        chai.expect(newtext).to.eql('Please enter an email address or phone number');
        await driver.close();
    })

    it('should login with phone(no country code), valid password', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.linkedin.com/login');
        await driver.findElement(By.id('username')).sendKeys(`${phoneNoCode}`);
        await driver.findElement(By.id('password')).sendKeys(`${password}`);
        await driver.findElement(By.className('btn__primary--large')).click();
        await driver.close();
    })

    it('should not login with phone (country code), valid password', async ()=>{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.linkedin.com/login');
        await driver.findElement(By.id('username')).sendKeys(`${phoneCode}`);
        await driver.findElement(By.id('password')).sendKeys(`${password}`);
        await driver.findElement(By.className('btn__primary--large')).click();
        await driver.close();
    })

})