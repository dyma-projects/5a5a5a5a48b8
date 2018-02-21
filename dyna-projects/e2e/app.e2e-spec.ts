import { DynaProjectsPage } from './app.po';

describe('dyna-projects App', () => {
  let page: DynaProjectsPage;

  beforeEach(() => {
    page = new DynaProjectsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
