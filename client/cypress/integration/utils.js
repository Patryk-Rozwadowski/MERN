export const getElementAndType = el => {
  text => cy.get(el).type(text);
};
