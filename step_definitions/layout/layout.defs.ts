import { Then } from 'cucumber';
import { LayoutSteps } from './layout.steps';

const steps = new LayoutSteps();

Then(/^user see name of app "([^"]*)" in the header$/, async (header: string) => steps.isHeaderCorrect(header));
Then(/^user see amount of found computers$/, async () => steps.isComputerAmountPresent());
Then(/^user see input field with placeholder "([^"]*)"$/, placeHolder => steps.inputFieldPresents(placeHolder));
Then(/^user see button "([^"]*)"$/, (button: string) => steps.isButtonPresent(button));
Then(/^user see pagination block$/, () => steps.isPaginationPresent());
