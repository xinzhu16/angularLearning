import { AngularLearningPage } from './app.po';

describe('angular-learning App', () => {
  let page: AngularLearningPage;

  beforeEach(() => {
    page = new AngularLearningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
