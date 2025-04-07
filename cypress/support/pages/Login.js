class Login {
    
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }
  
    fillUserPassAndLogin() {
        cy.get('input[id="user-name"]').type('standard_user');
        cy.get('input[id="password"]').type('secret_sauce');
        cy.get('input[id="login-button"]').click(); 
    }
  
  }
  
  export const login = new Login();