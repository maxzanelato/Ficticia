import { Angular4CrudRestPage } from './app.po';

describe('angular4-crud-rest App', () => {
  let page: Angular4CrudRestPage;

  beforeEach(() => {
    page = new Angular4CrudRestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
