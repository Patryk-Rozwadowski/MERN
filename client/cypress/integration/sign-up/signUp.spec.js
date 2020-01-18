import { getElement, getElementAndType } from '../../utils';

describe('signUp / register', () => {
  beforeEach(() => {
    cy.setUp();
    cy.visit('sign-up');
  });
  it('should be able to add login and password', () => {
    getElementAndType('#firstName')('coolName');
    getElementAndType('#lastName')('coolName');
    getElementAndType('#email')('coolName');
    getElementAndType('#password')('123123');
    getElement('button-sign-up').click();
  });

  it('in case if user has account, go to sing in page', () => {
    getElement('link-to-signin').click();
    cy.url().should('include', '/sign-in');
  });
});
