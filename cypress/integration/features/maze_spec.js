context('Maze', () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.visit('http://localhost:19006')
    cy.contains('New Game').click()
    cy.get('input').type('marcher')
    cy.wait(2000)
    cy.get('input').type('ouvrir')
    cy.wait(1000)
  })

  it('Once chicken has reached top of the sceen, the maze appears', () => {
    cy.get('#maze').should('have.css', 'backgroundColor', 'rgb(174, 224, 153)')
  })

  it('places chicken at starting point', () => {
    cy.get('#chicken-idleup').should('have.css', 'top', '467px')
  })

  it("moves the chicken up, when typing 'haut'", () => {
    cy.get('input')
      .type('haut')
    cy.get('#chicken-walkup')
  })

  it("doesn't intersect chicken with a wall", () => {
    cy.get('input')
      .type('haut')
    cy.wait(1000)
    cy.get('input')
      .type('haut')
    cy.get('#chicken-idleup').should('have.css', 'top', '391px')
  })

  it("can complete the maze", () => {
    cy.get('input').type('haut')
    cy.wait(1000)
    cy.get('input').type('droite')
    cy.wait(2000)
    cy.get('input').type('haut')
    cy.wait(3000)
    cy.get('input').type('gauche')
    cy.wait(2000)
    cy.get('input').type('bas')
    cy.wait(2000)
    cy.get('input').type('droite')
    cy.wait(2000)
    cy.get('input').type('bas')
    cy.wait(2000)
    cy.get('input').type('gauche')
    cy.wait(2000)
    cy.get('input').type('bas')
    cy.wait(2000)
    cy.get('input').type('gauche')
    cy.wait(2000)
    cy.get('input').type('haut')
    cy.wait(2000)
    cy.get('input').type('droite')
    cy.wait(2000)
    cy.get('input').type('haut')
    cy.wait(4000)
    cy.get('#chicken-walkup').should('not.be.visible')
  })
})
