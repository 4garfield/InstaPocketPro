import { After, Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { by, element } from 'protractor';

import { AppPage } from '../pos/app.po';

let page: AppPage;

Before(async () => {
  page = new AppPage();
});

After(() => {

});

Given(/^I am on the home page$/, async () => {
  await page.navigate('/');
});

When(/^I do nothing$/, () => {

});

Then(/^I should see the title$/, async () => {
  expect(await element(by.css('app-root h1')).getText()).to.equal('Welcome to app!');
});
