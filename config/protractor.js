'use strict';
const config = require('./config.js')();

exports.config = {
  sauceUser: config.sauceUser,
  sauceKey: config.sauceKey,
  capabilities: {
    'name': config.sauceTestName,
    'browserName': 'Chrome'
    'platform': 'Windows 10',
    'version': 'latest',
    'tunnel-identifier': config.travisJobNumber,
    'build': config.travisBuild
  },
  specs: ['../test/e2e/**/*.js'],
  onPrepare: function(){
    browser.driver.get('http://localhost:3000');
    browser.driver.findElement(by.id('entrar')).click();
    browser.driver.findElement(by.id('login_field')).sendKeys(config.selinumUser);
    browser.driver.findElement(by.id('password')).sendKeys(config.selinumUserPassword);
    browser.driver.findElement(by.name('commit')).click();
  }
}
