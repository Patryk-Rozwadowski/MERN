import { getElement } from '../../utils';

describe('Nav', () => {
  beforeEach(() => {
    cy.setUp();
    cy.route('/api/users', 'fixture:users/users.fixture').as('users');
    cy.visit('/');
    cy.wait(['@users']);
  });

  it('should be visible', () => {
    getElement('nav').should('be.visible');
  });

  it('should be visible and transparent', () => {
    getElement('nav').should('have.class', 'nav-transparent');
  });

  it('should be visible and black', () => {
    cy.visit('/users');
    getElement('nav').should('have.class', 'nav-black');
  });

  it('should links works', () => {
    cy.get('[data-cy="nav-link-users"]').click();
    cy.get('[data-cy="nav-link-images"]').click();
    cy.get('[data-cy="nav-link-add-image"]').click();

    cy.get('[data-cy="nav-link-login"]').click();
    cy.visit('/');
    cy.get('[data-cy="nav-link-register"]').click();
  });

  it('logo working', () => {
    cy.visit('/users');
    cy.get('[data-cy="nav-link-logo"]').click();
  });
  it('Home working', () => {
    cy.visit('/users');
    cy.get('[data-cy="nav-link-home"]').click();
  });
});
