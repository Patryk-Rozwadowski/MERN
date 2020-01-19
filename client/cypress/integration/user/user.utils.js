export const userRoutes = () => {
  cy.route('/api/21/user', 'fixture:user/user.fixture').as('userInfo');

  cy.route('/api/21/images', 'fixture:user/user-images.fixture').as(
    'userImages'
  );
};
