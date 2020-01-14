import { getElement } from '../../utils';
describe('user images', () => {
  beforeEach(() => {
    cy.setUp();
  });

  it("Patryk's images and profile", () => {
    getElement('user-images-21').click();
  });
});
