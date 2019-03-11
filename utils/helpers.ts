import { $, browser, ElementArrayFinder, ElementFinder, ExpectedConditions as EC } from 'protractor';
import * as logger from 'signale';

export class Helpers {
	public async isElementEmpty(element: ElementFinder): Promise<boolean> {
		const elementText = (await element.getText()).trim();
		return elementText.length === 0;
	}

	public async isElementExistsAndVisible(element: ElementFinder): Promise<boolean> {
		const status = await element.isPresent();
		const displayStatus = await element.isDisplayed();
		return status ? displayStatus : status;
	}

	public async waitClickability(element: ElementFinder, timeout: number = 5000): Promise<ElementFinder> {
		try {
			await browser.wait(EC.elementToBeClickable(element), timeout);
		} catch (error) {
			logger.fatal(error);
		}
		return element;
	}

	public async waitUntilDisplayed(element: ElementFinder, timeout: number = 5000): Promise<ElementFinder> {
		try {
			await browser.wait(EC.visibilityOf(element), timeout);
		} catch (error) {
			logger.fatal(error);
		}
		return element;
	}

	public async waitForElement(element: ElementFinder, timeout: number = 5000): Promise<void> {
		try {
			await browser.wait(EC.visibilityOf(element), timeout);
		} catch (error) {
			logger.fatal(error);
		}
	}

	public async waitUntilNotVisible(element: ElementFinder, timeout: number = 5000): Promise<void> {
		try {
			await browser.wait(EC.invisibilityOf(element), timeout);
		} catch (error) {
			logger.fatal(error);
		}
	}

	public async waitForBlink(selector: string, timeout: number = 1000) {
		try {
			await browser.wait(EC.presenceOf($(selector)), timeout * 3);
		} catch (e) {
			logger.debug(`Element [${selector}] was not present`);
		}
		await browser.wait(EC.stalenessOf($(selector)), timeout * 5);
	}

	public async getValueOfAttribute(element: ElementFinder, attribute: string): Promise<string | undefined> {
		let attributeValue;
		try {
			attributeValue = await element.getAttribute(attribute);
		} catch (error) {
			logger.debug(`The passed element doesn't have the attribute - [${attribute}]`);
		}
		return attributeValue;
	}

	public async refreshPage(): Promise<void> {
		return browser.refresh();
	}

	public async navigateBack(): Promise<void> {
		await browser.navigate().back();
	}

	public async scrollToTop(): Promise<void> {
		await browser.executeScript('window.scrollTo(0,0);');
	}

	public async scrollToElement(element: ElementFinder) {
		await browser.executeScript('arguments[0].scrollIntoView(false)', element);
	}
}
