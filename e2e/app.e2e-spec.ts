import { HobbyAppNgPage } from './app.po';

describe('hobby-app-ng App', () => {
  let page: HobbyAppNgPage;

  beforeEach(() => {
    page = new HobbyAppNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
