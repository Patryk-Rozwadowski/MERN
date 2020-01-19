import { getElement } from '../../utils';
import { navRoutes } from './nav.utils';

describe('Nav', () => {
  beforeEach(() => {
    cy.setUp();
    navRoutes();
    cy.visit('/');
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

  it('nav links should works', () => {
    getElement('nav-link-users').click();
    getElement('nav-link-images').click();
    getElement('nav-link-add-image').click();

    getElement('nav-link-login').click();
    cy.visit('/');

    getElement('nav-link-register')
      .should('be.visible')
      .click();
  });

  it('logo working', () => {
    cy.visit('/users');
    getElement('nav-link-logo').click();
  });
  it('Home working', () => {
    cy.visit('/users');
    getElement('nav-link-home').click();
  });
});
