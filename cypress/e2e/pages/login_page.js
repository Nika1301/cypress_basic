export class LoginPage {
  userName_textbox =
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";

  password_textbox =
    ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  login_button = ".oxd-button";
  
  enterUsername(userName) {
    cy.get(this.userName_textbox).type(userName);
  }

  enterPasword(password) {
    cy.get(this.password_textbox).type(password);
  }
  clickLogin() {
    cy.get(this.login_button).click();
  }
}
