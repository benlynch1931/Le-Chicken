context('Maze', () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.visit('http://localhost:19006')
    cy.get('input')
      .type('marcher')
  })

  it('Once chicken has reached top of the sceen, the maze appears', () => {
    cy.wait(3000)
    cy.get('input')
      .type('ouvrir')
    cy.get('#maze').should('have.css', 'backgroundColor', 'rgb(174, 224, 153)')
  })

  it('places chicken at starting point', () => {
    cy.wait(3000)
    cy.get('input')
      .type('ouvrir')
    cy.get('#chicken-up').should('have.css', 'top', '467px')
  })

  it("moves the chicken up, when typing 'haut'", () => {
    cy.wait(3000)
    cy.get('input')
      .type('ouvrir')
    cy.wait(3000)
    cy.get('input')
      .type('haut')
    cy.get('#chicken-walkUp')
  })
})
