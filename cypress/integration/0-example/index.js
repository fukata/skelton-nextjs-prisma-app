describe('example', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('top', () => {
    cy.title().should('include', 'Sample App')
  })
});
