import { BriefExchangePage } from './app.po';

describe('brief-exchange App', () => {
  let page: BriefExchangePage;

  beforeEach(() => {
    page = new BriefExchangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
