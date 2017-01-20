import { ConceptsJSPage } from './app.po';

describe('concepts-js App', function() {
  let page: ConceptsJSPage;

  beforeEach(() => {
    page = new ConceptsJSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
