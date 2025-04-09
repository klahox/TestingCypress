class Page_01_Login {

    elements = {
        inputUserName: () => cy.get('input[id="user-name"]'),
        inputPassword: () => cy.get('input[id="password"]'),
        buttonlogin: () => cy.get('input[id="login-button"]'),
    }

    visit(baseUrl) {
        cy.visit(baseUrl);
    }

    fillUserPassAndLogin(credentials) {
        this.elements.inputUserName().type(credentials.username);
        this.elements.inputPassword().type(credentials.password);
        this.elements.buttonlogin().click(); 
    }

}
  
export const login = new Page_01_Login();   