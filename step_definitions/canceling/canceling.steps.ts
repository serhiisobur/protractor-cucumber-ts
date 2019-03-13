import { TableDefinition } from 'cucumber';
import { protractor } from 'protractor';
import { AddPage } from '../../pageObjects/add.pageObject';
import { Helpers } from '../../utils/helpers';
const helper = new Helpers();

const page = new AddPage();

export class Steps {
	public async fillFields(dataTable: TableDefinition) {
		const testData: Array<string> = dataTable.rows().flat();
		await helper.waitForElement(page.nameField);
		await page.nameField.sendKeys(testData[0]);
		await page.introField.sendKeys(testData[1]);
		await page.discontinuedField.sendKeys(testData[2]);
		await page.companySelector.click().then(() => page.companySelector.sendKeys(testData[3]));
	}
}
