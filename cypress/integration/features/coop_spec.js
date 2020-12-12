/// <reference types="cypress" />

context('Coop Actions', () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.visit('http://localhost:19006')
  })

  it('allows user to type', () => {
    cy.get('input')
      .type('walk').should('have.value', 'walk')
  })

  it("moves the chicken to the top, when user types 'marche'", () => {
    cy.get('#chicken-idleright').should('have.css', 'top', '487px')
    cy.get('input')
      .type('marcher')
    cy.wait(3000)
    cy.get('#chicken-idleup').should('have.css', 'top', '127px')
  })

  it("animates the chicken, when walking up", () => {
    cy.get('#chicken-idleright')
    cy.get('input')
      .type('marcher')
    cy.get('#chicken-walkup')
  })

  it("resets chicken to idle when stopped", () => {
    cy.get('#chicken-idleright')
    cy.get('input')
      .type('marcher')
    cy.get('#chicken-walkup')
    cy.wait(3000)
    cy.get('#chicken-idleup')
  })

  it("chicken moves up when user types ouvrir", () => {
    cy.get('#chicken-idleright')
    cy.get('input')
      .type('marcher')
    cy.get('input')
      .type('ouvrir')
    cy.get('#chicken-idleup').should('have.css', 'top', '219px')
  })
})
