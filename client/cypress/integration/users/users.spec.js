import { getElement } from '../../utils';

describe('users list page', () => {
  beforeEach(() => {
    cy.setUp();
    cy.route('/api/users', 'fixture:users/users.fixture').as('users');
    cy.visit('/users-list');
    cy.wait(['@users']);
  });

  it('should be abe to see user page', () => {
    getElement('users-list-container').should('be.visible');
  });

  it('user card should be rendered', () => {
    getElement('user-card-21').should('be.visible');
    getElement('user-card-12').should('be.visible');
  });

  it('profile links for user images works', () => {
    getElement('user-images-21').click();
    cy.url().should('include', '/21/images');
  });

  it('profile links for user places works', () => {
    getElement('user-places-21').click();
    cy.url().should('include', '/21/places');
  });

  it('profile links for user profile works', () => {
    getElement('user-profile-21').click();
    cy.url().should('include', '/21/profile');
  });
});
