import {LoginPage}  from "./pages/login_page"
const loginPage = new LoginPage()
describe('All Login Tests', function(){
    
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
    it('Login Test 1', function(){
       
      loginPage.enterUsername('Admin')
      loginPage.enterPasword('admin123')
      loginPage.clickLogin()
      cy.get('.oxd-userdropdown-tab').click()
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // cy.get('.oxd-button').click()
    cy.wait(2000)
    })
    
    it('Login Test 2', function(){
        
        
      loginPage.enterUsername('Admin')
      loginPage.enterPasword('admin123')
      loginPage.clickLogin()
    
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // cy.get('.oxd-button').click()
    })

    
})
