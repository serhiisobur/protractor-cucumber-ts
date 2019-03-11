import { $, $$, browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class MainPage {
	private addButton: ElementFinder = $('.success');
	private deleteButton: ElementFinder = $('.btn.danger');
	private filterButton: ElementFinder = element(by.id('searchsubmit'));
	private header: ElementFinder = $('.fill');
	private computersAmount: ElementFinder = $('#main > *:first-child');
	private inputField: ElementFinder = $('input');
	private paginationBlock: ElementFinder = element(by.id('pagination'));
	private alertMessage: ElementFinder = $('.alert-message');
	private nameCell: ElementArrayFinder = $$('td a');
	private table = $$('tbody tr td a');

	public async getComputerAmount(): Promise<string> {
		return this.computersAmount.getText();
	}

	public async goToPage(): Promise<void> {
		await browser.get('/');
	}

	public async getHeaderText(): Promise<string> {
		return this.header.getText();
	}
	public getInputField(): ElementFinder {
		return this.inputField;
	}
	public getButton(buttonName: string): ElementFinder {
		return buttonName === 'Filter by name' ? this.filterButton : this.addButton;
	}
	public getPaginator(): ElementFinder {
		return this.paginationBlock;
	}
}
