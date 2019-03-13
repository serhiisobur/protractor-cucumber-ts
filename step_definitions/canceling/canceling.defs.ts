import { TableDefinition, Then, When } from 'cucumber';
import { CommonSteps } from '../common.steps';
import { Steps } from './canceling.steps';

const commonSteps = new CommonSteps();
const steps = new Steps();

When(/^user input to fields:$/, (dataTable: TableDefinition) => steps.fillFields(dataTable));

Then(/^user is redirected to main page$/, () => commonSteps.isUserOnMainPage());
