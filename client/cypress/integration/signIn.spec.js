describe('signUp / login', () => {
  it('should be able to add login and password', () => {
    cy.visit('localhost:3000/signin');
    cy.get('#email').type('fake@gmail.com');
  });
});
