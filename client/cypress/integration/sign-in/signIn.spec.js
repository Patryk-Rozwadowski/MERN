import { getElementAndType } from '../../utils';

describe('sign in', () => {
  beforeEach(() => {
    cy.setUp('/sign-up');
  });

  it('should be possible to log in', () => {
    getElementAndType('#firstName')('Patryk');
    getElementAndType('#lastName')('Paprykowski');
    getElementAndType('#email')('papryka@papryk.com');
    getElementAndType('#password')('qwerty123');
    cy.get('[data-cy=button-sign-up]').click();
  });
});
