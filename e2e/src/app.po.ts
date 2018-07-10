import { browser, by, element } from 'protractor';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.col-3.pl-4 h2')).getText();
  }
}
