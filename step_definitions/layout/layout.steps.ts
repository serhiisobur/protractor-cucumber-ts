// tslint:disable:no-unused-expression
import { expect } from 'chai';
import { ElementFinder } from 'protractor';
import { MainPage } from '../../pageObjects/mainPage';
import { CommonSteps } from '../common.steps';
import { REGEXPS } from './../../data/testData';
const page = new MainPage();

export class LayoutSteps extends CommonSteps {
	public async isPaginationPresent(): Promise<void> {
		expect(await page.getPaginator().isDisplayed()).to.be.true;
	}
	public async isButtonPresent(buttonName: string): Promise<void> {
		const button: ElementFinder = await page.getButton(buttonName);
		expect(await button.isDisplayed()).to.be.true;
	}
	public async inputFieldPresents(placeHolder: any): Promise<void> {
		const input: ElementFinder = page.getInputField();
		const actualPlaceHolderText = await input.getAttribute('placeholder');
		expect(await input.isDisplayed()).to.be.true;
		expect(actualPlaceHolderText).to.equal(placeHolder);
	}
	public async isComputerAmountPresent(): Promise<void> {
		expect(await page.getComputerAmount()).to.match(REGEXPS.computerAmount);
	}
	public async isHeaderCorrect(text: string): Promise<void> {
		expect(await page.getHeaderText()).to.equal(text);
	}
}
