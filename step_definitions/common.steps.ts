import { expect } from 'chai';
import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';
import * as logger from 'signale';
import { URLS } from '../data/testData';
import { Helpers } from '../utils/helpers';
const helper = new Helpers();

export class CommonSteps {
	public async goToPage(): Promise<void> {
		await browser.get('/');
	}

	public async clickButton(button: string): Promise<void> {
		const buttons: { [key: string]: ElementFinder } = {
			'Add new computer': $('[id="add"]'),
			'Filter by name': $('[id="searchbox"]'),
			'Cancel': $('a.btn'),
			'Create this computer': $('[type="submit"]')
		};
		if (button in buttons) {
			return buttons[button].click();
		}
		logger.fatal(`Button ${button} doesn't exist`);
	}

	public async isUserOnMainPage(): Promise<void> {
		await helper.waitForElement($('[id="add"]'));
		expect(await browser.getCurrentUrl()).to.equal(URLS.mainPage);
	}
}
