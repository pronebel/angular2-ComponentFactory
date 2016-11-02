import { Angular2ComponentRefPage } from './app.po';

describe('angular-2-component-ref App', function() {
  let page: Angular2ComponentRefPage;

  beforeEach(() => {
    page = new Angular2ComponentRefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
