import { AppPage } from './app.po';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('RanDog');
  });
});

describe('detect image at click', () => {
  // test per la presenza delle immagini
});
