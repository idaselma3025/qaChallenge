var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
const { Given, When, Then, Before } = require('cucumber');
const webdriver = require('selenium-webdriver');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

defineSupportCode(function({Given,When,Then, And}){

  When('Ida fills {string} with {string}', function (email_field, email) {
    this.driver.wait(until.elementLocated(By.id('email')),5000).then(enterEmail => {
      return enterEmail.sendKeys(email);
    });
  });

  When('fills {string} with {string}', function (password_field, password) {
    this.driver.wait(until.elementLocated(By.id('password')),5000).then(enterPw => {
      return enterPw.sendKeys(password);
    });
  });
  When('selects {string}', function (login) {
    this.driver.wait(until.elementLocated({className:'btn-login'}), 5000).then(login => {
      return login.click();
    });
  });

  Then('Ida should be able to see the workplace dashboard with her name',{timeout:200*1000}, function () {
    var introEl = this.driver.wait(until.elementLocated({className:'intro-container'}));
    return expect(introEl.getAttribute('innerHTML'))
    .to.eventually.contain('Hi Ida!');
  });
});
