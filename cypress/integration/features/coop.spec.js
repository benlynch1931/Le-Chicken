/// <reference types="cypress" />

context('Coop Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006')
  })

  it('allows user to type', () => {
    cy.get('input')
      .type('walk').should('have.value', 'walk')
  })
})
