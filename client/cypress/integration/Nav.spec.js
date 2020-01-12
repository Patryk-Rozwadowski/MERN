describe('Nav', () => {
  it('should go to users route', () => {
    cy.visit('localhost:3000/');
    cy.get(
      '[href="/users"] > .MuiButtonBase-root > .MuiButton-label > .MuiTypography-root'
    ).click();
  });

  it('should go to images route', () => {
    cy.get(
      '[href="/images"] > .MuiButtonBase-root > .MuiButton-label > .MuiTypography-root'
    ).click();
  });

  it('should go to add image route', () => {
    cy.get(
      '[href="/addimage"] > .MuiButtonBase-root > .MuiButton-label > .MuiTypography-root'
    );
  });

  it('should go to login route', () => {
    cy.get(
      '[href="/signup"] > .MuiButtonBase-root > .MuiButton-label > .MuiTypography-root'
    ).click();
  });
});
