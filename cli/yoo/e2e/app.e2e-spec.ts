import { YooPage } from './app.po';

describe('yoo App', () => {
  let page: YooPage;

  beforeEach(() => {
    page = new YooPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
