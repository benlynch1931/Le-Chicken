context('Maze', () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.visit('http://localhost:19006')
  })

  it('Once chicken has reached top of the sceen, the maze appears', () => {
    cy.get('input')
    .type('marcher')
    cy.get('input')
    .type('ouvrir')
    cy.get('#maze').should('have.css', 'backgroundColor', 'rgb(0, 255, 0)')
    cy.get('#chicken-right').should('have.css', 'top', '500px')
  })
})