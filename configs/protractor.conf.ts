import { browser, Config } from 'protractor';

export const config: Config = {
  baseUrl: 'https://computer-database.herokuapp.com/computers',
  capabilities: {
	'browserName': 'chrome',
	'goog:chromeOptions': {
		args: [
		'--headless',
		'--disable-gpu',
		'--window-size=1024,768',
		'--disable-infobars'
		]
	}
  },
  cucumberOpts: {
	'format': 'progress-bar',
	'profile': false,
	'require': ['../step_definitions/**/*.js'],
	'format-options': ['{"snippetInterface": "async-await"}'],
	'tags': false
  },
  SELENIUM_PROMISE_MANAGER: false,
  waitForAngularEnabled: false,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../../features/*.feature'],
  // tslint:disable-next-line:object-literal-shorthand
  // tslint:disable-next-line:only-arrow-functions
  async onPrepare() {
	await browser.waitForAngularEnabled(false);
  }
};
