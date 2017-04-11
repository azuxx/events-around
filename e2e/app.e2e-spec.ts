import { EventsAroundPage } from './app.po';

describe('events-around App', () => {
  let page: EventsAroundPage;

  beforeEach(() => {
    page = new EventsAroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
