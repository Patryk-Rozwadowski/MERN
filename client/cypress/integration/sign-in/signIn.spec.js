import { getElement, getElementAndType } from '../../utils';

describe('sign in', () => {
  beforeEach(() => {
    cy.setUp();
    cy.visit('/sign-in');
  });

  it('should be possible to log in', () => {
    getElementAndType('#email')('papryka@papryk.com');
    getElementAndType('#password')('qwerty123');
    getElement('button-sign-in').click();
  });
});
