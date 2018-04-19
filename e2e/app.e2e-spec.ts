import { AppPage } from './app.po';

describe('peninsula-file-explorer App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message and file explorer component', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Basic File Explorer Component');
    expect(page.getFileExplorerComponent().isPresent());
    expect(page.getFileExplorerComponent().isDisplayed());
  });

  it('should display file explorer elements', () => {
    expect(page.getFileExploreTableHeaders().isPresent());
    expect(page.getFileExploreTableHeaders().isDisplayed());
  });

  it('should display files explorer file list', () => {
    expect(page.getFileExploreTableRows().isPresent());
    expect(page.getFileExploreTableRows().isDisplayed());
    expect(page.getFileExploreTableRows.length === 5 );
  });

  it('should display folder contents when folder clicked', () => {
    page.clickFolderRow();
    expect(page.getFileExploreTableRows().isPresent());
    expect(page.getFileExploreTableRows().isDisplayed());
    expect(page.getFileExploreTableRows.length === 3 );
  });

  it('should navigate back to the previous directory when the first row is clicked', () => {
    page.clickFolderRow();
    expect(page.getFileExploreTableRows().isPresent());
    expect(page.getFileExploreTableRows().isDisplayed());
    expect(page.getFileExploreTableRows.length === 5 );
  });
});
