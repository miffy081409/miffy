import { MiffyPage } from './app.po';

describe('miffy App', () => {
  let page: MiffyPage;

  beforeEach(() => {
    page = new MiffyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
