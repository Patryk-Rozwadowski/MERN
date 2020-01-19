export const navRoutes = () => {
  cy.route('/api/users', []);
  cy.route('/api/images', []);
};
