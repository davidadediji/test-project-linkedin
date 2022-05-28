# LinkedIn Authentication Test

To run the test copy contents in env-example, create a `.env` file and add to it along with your credentials
Ensure to create a .gitignore file and add include theclea .env

### Requirements
- Selenium webdriver
- Browser driver (in our case chrome driver)

### Setup

To setup the whole project and use dependencies use command:
```
npm install
```
Get Chrome driver installed globally with the command:
```
npm install -g chromedriver
```

To install selenium web driver,navigate to the project root and use command:

```
npm install selenium-webdriver
```
For test groupings,install mocha
```
npm install mocha
```

To generate test reports install mochawesome via command:
```
npm install mochawesome
```
Overall add the following lines to the test object in `package.json`

```
mocha --no-timeouts --parallel reporter mochawesome
```

### Test Cases
- Test with valid email and password   -- Positive [+]
- Test with invalid email and valid password  --Negative [+]
- Test with valid email and invalid password   -- Negative
- Test the Login page with valid phone no with country code and password -- positive
- Test the Login page with valid phone no with no country code and valid password -- negative
- Test the login page for both, when the field is blank and Submit button is clicked -- Negative
### Conclusion
Test

##### Author: David Adediji