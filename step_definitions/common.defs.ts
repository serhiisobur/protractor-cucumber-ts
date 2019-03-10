import { Given } from 'cucumber';
import { CommonSteps } from './common.steps';
const steps = new CommonSteps();

Given(/^user at the main page$/, () => steps.goToPage());
