context('Menu', () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.visit('http://localhost:19006')
  })
  it('Starts the app by displaying the menu', () => {
    cy.get('#menu').should('be.visible')
  })
  it("Displays the game when clicking 'new game' ", () => {
    cy.contains('New Game').click()
    cy.get('#game').should('be.visible')
  })
  it("No longer displays the menu after clicking 'new game'", () => {
    cy.contains('New Game').click()
    cy.get('#menu').should('not.be.visible')
  })
  it("can return to the menu from the game", () => {
    cy.contains('New Game').click()
    cy.contains('Menu').click()
    cy.get('#menu').should('be.visible')
  })
  it("Allows you to continue your game", () => {
    cy.contains('New Game').click()
    cy.get('input')
      .type('marcher')
    cy.wait(3000)
    cy.contains('Menu').click()
    cy.contains('Continue Game').click()
    cy.get('#chicken-idleup').should('have.css', 'top', '111px')
  })
  it("Allows you to start a new game", () => {
    cy.contains('New Game').click()
    cy.get('input')
      .type('marcher')
    cy.wait(3000)
    cy.contains('Menu').click()
    cy.contains('New Game').click()
    cy.get('#chicken-idleright').should('have.css', 'top', '447px')
  })
  it("has a button to turn music on", () => {
    cy.contains('Music: Off').should('be.visible')
  })
  it("has a button to turn music back off", () => {
    cy.contains('Music: Off').click()
    cy.contains('Music: On').should('be.visible')
  })
})