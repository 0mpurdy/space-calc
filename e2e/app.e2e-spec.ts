import { SpaceCalcPage } from './app.po';

describe('space-calc App', () => {
  let page: SpaceCalcPage;

  beforeEach(() => {
    page = new SpaceCalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
