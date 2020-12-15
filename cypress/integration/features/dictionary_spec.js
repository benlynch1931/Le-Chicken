context('Menu', () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.visit('http://localhost:19006')
  })
  it("Displays the 'Dictionary' when clicking 'dictionary' ", () => {
    cy.contains('New Game').click()
    cy.contains('Dictionary').click()
    cy.contains("~* DICTIONARY *~").should('be.visible')
    cy.get('#dictionary').should('be.visible')
  })
  it("No longer displays the dictionary after clicking 'back'", () => {
    cy.contains('New Game').click()
    cy.contains('Dictionary').click()
    cy.contains('Back').click()
    cy.get('#dictionary').should('not.be.visible')
  })
  it("displays 'Marcher' and its translation", () => {
    cy.contains('New Game').click()
    cy.get('input')
      .type('marcher')
    cy.wait(1000)
    cy.contains('Dictionary').click()
    cy.contains('Marcher ~~~~ To walk').should('be.visible')
  })

  it("displays 'Ouvrir' and its translation", () => {
    cy.contains('New Game').click()
    cy.get('input')
      .type('marcher')
    cy.wait(1000)
    cy.get('input')
    .type('ouvrir')
    cy.contains('Dictionary').click()
    cy.contains('Ouvrir ~~~~ To open').should('be.visible')
  })
})