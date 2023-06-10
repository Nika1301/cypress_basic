///<reference types="cypress"/>

it('Gooogle Search', () =>{
   cy.visit('https://www.google.com/search')

   cy.get('#L2AGLb > .QS5gu').click()
   cy.get('#APjFqb').type('Weather')
  cy.contains('Google Suche').click()
  cy.wait(4000)
  cy.contains('Videos').click()
}
)