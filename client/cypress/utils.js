export const getElementAndType = el => {
  return function(text) {
    return cy.get(el).type(text);
  };
};
