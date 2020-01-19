import { getElement } from '../../utils';

describe('home page', () => {
  beforeEach(() => {
    cy.setUp();
    cy.visit('/');

    cy.route('/api/users', 'route:users/users.fixture');
  });

  it('home page should be visible', () => {
    getElement('home').should('be.visible');
  });

  it('nav should be visible and transparent', () => {
    getElement('nav')
      .should('be.visible')
      .should('have.class', 'nav-transparent');
  });

  it('register button should be visible', () => {
    getElement('register-btn').should('be.visible');
  });
});
