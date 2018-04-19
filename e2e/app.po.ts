import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('app-root h1')).getText();
  }

  getFileExplorerComponent() {
    return element(by.css('app-file-explorer'));
  }

  getFileExploreTableHeaders() {
    return element(by.css('app-file-explorer .row-headers'));
  }

  getFileExploreTableRows() {
    return element.all(by.css('app-file-explorer .row-content'));
  }

  clickFolderRow() {
    element.all(by.css('app-file-explorer .row-content')).get(0).click();
  }

}
