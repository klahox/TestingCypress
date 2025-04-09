import { verifyProductDetails } from '../utils/productsUtils';

class Checkout {
    elements = {
        overviewItems: () => cy.get("div[data-test='inventory-item']"),
        firstNameInput: () => cy.get('input[id="first-name"]'),
        lastNameInput: () => cy.get('input[id="last-name"]'),
        postalCodeInput: () => cy.get('input[id="postal-code"]'),
        continueButton: () => cy.get('input[id="continue"]'),
        finishButton: () => cy.get('button[id="finish"]'),
        ponyExpressImage: () => cy.get('img[data-test="pony-express"]'),
        completeHeader: () => cy.get('h2[data-test="complete-header"]'),
        completeText: () => cy.get('div[data-test="complete-text"]'),
        backToProductsButton: () => cy.get('button[id="back-to-products"]')
    }

    fillUserInformation(userInfo) {
        this.elements.firstNameInput().type(userInfo.firstName);
        this.elements.lastNameInput().type(userInfo.lastName);
        this.elements.postalCodeInput().type(userInfo.postalCode);
    }

    continueToOverview() {
        this.elements.continueButton().click();
    }

    verifyProductInCheckout(expectedProducts) {
        verifyProductDetails(this.elements.overviewItems(), expectedProducts);  
    }

    completePurchase() {
        this.elements.finishButton().click();
    }

    verifyOrderCompletion() {
        this.elements.ponyExpressImage().should('be.visible');
        this.elements.completeHeader().should('be.visible');
        this.elements.completeText().should('be.visible');
        this.elements.backToProductsButton().should('be.visible');
    }
}

export const checkout = new Checkout(); 