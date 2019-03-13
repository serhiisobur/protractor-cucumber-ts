import { $, ElementFinder } from 'protractor';

export class AddPage {
	public readonly header: ElementFinder = $('#main > *:first-child');
	public readonly nameField: ElementFinder = $('[id="name"]');
	public readonly discontinuedField: ElementFinder = $('[id="discontinued"]');
	public readonly introField: ElementFinder = $('[id="introduced"]');
	public readonly nameFieldLabel: ElementFinder = $('label[for=\'name\']');
	public readonly introFieldLabel: ElementFinder = $('label[for=\'introduced\']');
	public readonly discontinuedLabel: ElementFinder = $('label[for=\'discontinued\']');
	public readonly companySelector: ElementFinder = $('[id="company"]');
	public readonly companyLabel: ElementFinder = $('label[for=\'company\']');
	public readonly highlight: ElementFinder = $('.clearfix.error');
}
