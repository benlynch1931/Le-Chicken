/// <reference types="cypress" />

context('Coop Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006')
  })

  it('allows user to type', () => {
    cy.get('input')
      .type('walk').should('have.value', 'walk')
  })

  it("moves the chicken to the top, when user types 'marche'", () => {
    cy.get('#chicken').should('have.css', 'top', '450px')
    cy.get('input')
    .type('marche')
    cy.get('#chicken').should('have.css', 'top', '0px')
  })
})
