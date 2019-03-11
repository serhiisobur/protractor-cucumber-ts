import { browser } from 'protractor';

export class CommonSteps {
	public async goToPage(): Promise<void> {
		await browser.get('/');
	}
}
