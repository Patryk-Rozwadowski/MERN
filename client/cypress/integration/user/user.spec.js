import { getElement } from '../../utils';
import { userRoutes } from './user.utils';

describe('user page', () => {
  beforeEach(() => {
    cy.setUp();

    userRoutes();
    cy.visit('/21/images');
    cy.wait(['@userInfo']);
    cy.wait(['@userImages']);
  });

  context('Images found', () => {
    it('images list visible', () => {
      getElement('user-images-list').should('be.visible');
      getElement('warrning-images-not-found').should('not.be.visible');
    });
  });

  context('Images not found', () => {
    beforeEach(() => {
      cy.visit('/21/images');
      cy.route('/api/21/images', []);
    });
    it('warrning Images not found be visible', () => {
      getElement('warrning-images-not-found').should('be.visible');
    });
  });
});

context('user information', () => {
  it('user informations gradient should be visible', () => {
    getElement('profile-background').should('be.visible');
    getElement('user-profile-gradient').should('be.visible');
  });

  it('informations should be visible', () => {
    getElement('profile-avatar').should('be.visible');
    cy.contains('Patryk').should('be.visible');
    cy.contains('free').should('be.visible');
    cy.contains('Paprykk123').should('be.visible');
    cy.contains('100 Followers').should('be.visible');
    cy.contains('12 Following').should('be.visible');
    cy.contains('2 Images').should('be.visible');
    cy.contains('2 Places').should('be.visible');
  });
});
