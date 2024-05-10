import { generateNewExpirationDate } from '../Generate-new-expiration-date';

describe('testing service logout graphql', () => {
  it('service post logout', () => {
    expect(generateNewExpirationDate()).toBeDefined();
  });
});
