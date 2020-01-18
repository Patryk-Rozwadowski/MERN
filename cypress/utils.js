export const getElementAndType = el => {
  return function(text) {
    return cy.get(el).type(text);
  };
};

export const getElement = el => cy.get(`[data-cy="${el}"]`);
