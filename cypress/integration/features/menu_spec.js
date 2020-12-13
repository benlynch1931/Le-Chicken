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
})