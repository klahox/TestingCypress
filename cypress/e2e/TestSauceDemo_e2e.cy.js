import 'cypress-xpath';
import { login } from '../support/pages/Login';
import { assert } from 'chai';
describe('Sauce Demo E2E test', () => {

  const expectedNamePrice = new Map([
    ['Sauce Labs Backpack', 29.99],
    ['Sauce Labs Bike Light', 9.99],
    ['Sauce Labs Bolt T-Shirt', 15.99],
    ['Sauce Labs Fleece Jacket', 49.99],
    ['Sauce Labs Onesie', 7.99],
    ['Test.allTheThings() T-Shirt (Red)', 15.99]
  ]);

      
  it('E2E Tests', () => {

    // Login Page, enter user and pas and login
    login.visit();
    login.fillUserPassAndLogin();
    

    // Inventory Page, add to chart all products, and go to chart
    cy.log('Inventory Page, add to chart all products');
    checkItemNameAndPrice(true);
    cy.get('div[id="shopping_cart_container"]').click();
    

    //Click on Checkout 
    checkItemNameAndPrice(false);
    cy.get('button[id="checkout"]').click();


    // Checkout Step one, fill the data and continue
    cy.get('input[id="first-name"]').type('Klajdi');
    cy.get('input[id="last-name"]').type('IsStupid');
    cy.get('input[id="postal-code"]').type('12345');
    cy.get('input[id="continue"]').click();

    //Checkout Step two
    checkItemNameAndPrice(false);
    cy.get('button[id="finish"]').click();y

    //Asserts
    cy.get('img[data-test="pony-express"').should('be.visible');
    cy.get('h2[data-test="complete-header"').should('be.visible');
    cy.get('div[data-test="complete-text"').should('be.visible');
    cy.get('button[id="back-to-products"').should('be.visible');
  })


  function checkItemNameAndPrice(addToChart){
    
    cy.xpath("//div[@data-test='inventory-item']").each(($elem)=>{
      //Get the Name
      let name = $elem.find('div[data-test="inventory-item-name"').text().trim();

      //Get the price
      let price = $elem.find('div[data-test="inventory-item-price"').text().replace('$','');

      cy.log(`Hola name: ${name}`);
      cy.log(`Hola price: ${price}`);
      
      if(!expectedNamePrice.has(name) || parseFloat(expectedNamePrice.get(name)) != parseFloat(price) )
        return false;  

      if(addToChart)
        cy.wrap($elem).find('button').click();
      
    });


  }

  
});