import { browser } from 'protractor';

export class AppPage {

  navigate(url) {
    return browser.get(url);
  }

}
