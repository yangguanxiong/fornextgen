import { FornextgenPage } from './app.po';

describe('fornextgen App', function() {
  let page: FornextgenPage;

  beforeEach(() => {
    page = new FornextgenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
