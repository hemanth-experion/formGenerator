import { AutoFormPage } from './app.po';

describe('auto-form App', function() {
  let page: AutoFormPage;

  beforeEach(() => {
    page = new AutoFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('af works!');
  });
});
