require('chromedriver');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

var { setWorldConstructor, Before, After, setDefaultTimeout } = require('cucumber');

function CustomWorld(callback) {
  this.driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();
};

Before(function() {
  const driver = this.driver;
  driver.get('https://login.wheniwork.com/')
});

setWorldConstructor(CustomWorld);
