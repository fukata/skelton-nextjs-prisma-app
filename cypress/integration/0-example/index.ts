describe('example', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('title', () => {
    cy.title().should('include', 'Sample App');
  });

  it('h1', () => {
    cy.get('h1').contains('Sample App');
  });
});
