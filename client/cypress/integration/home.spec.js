describe('Home', () => {
    it('should open Homepage section', () => {
        cy.visit('localhost:3000/');
    });

    it('should have .home__container', () => {
        cy.get('.home__container')
            .should('be.visible')
            .should('exist')
    });

    it('should have Navigation', () => {
        cy.get('.MuiToolbar-root')
            .should('exist')
            .should('be.visible')
    })
});