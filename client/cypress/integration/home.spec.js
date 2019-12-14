import API_URL from "../../src/config";

describe('Home', () => {
    it('should open Homepage section', () => {
        cy.visit('localhost:3000');
    });

    it('should have Navigation', () => {
        cy.get('.MuiToolbar-root').should('exist');})
})