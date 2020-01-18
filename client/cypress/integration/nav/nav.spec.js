describe('Nav', () => {
  beforeEach(() => {
    cy.setUp();
    cy.visit('/');
  });

  it('should be visible', () => {
    cy.get('[data-cy="nav"]').should('be.visible');
  });

  it('should be visible and transparent', () => {
    cy.get('[data-cy="nav"]').should('have.class', 'nav-transparent');
  });

  it('should be visible and black', () => {
    cy.visit('/users');
    cy.get('[data-cy="nav"]').should('have.class', 'nav-black');
  });

  it('should links works', () => {
    cy.get('[data-cy="nav-link-users"]').click();
    cy.get('[data-cy="nav-link-images"]').click();
    cy.get('[data-cy="nav-link-add-image"]').click();

    cy.get('[data-cy="nav-link-login"]').click();
    cy.visit('/');
    cy.get('[data-cy="nav-link-register"]').click();
  });

  context('logo and home working as intended', () => {
    it('logo working', () => {
      cy.visit('/users');
      cy.get('[data-cy="nav-link-logo"]').click();
    });
    it('Home working', () => {
      cy.visit('/users');
      cy.get('[data-cy="nav-link-home"]').click();
    });
  });
});
