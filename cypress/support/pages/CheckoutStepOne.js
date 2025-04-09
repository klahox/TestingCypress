class CheckoutStepOne {
    elements = {
        firstNameInput: () => cy.get('input[id="first-name"]'),
        lastNameInput: () => cy.get('input[id="last-name"]'),
        postalCodeInput: () => cy.get('input[id="postal-code"]'),
        continueButton: () => cy.get('input[id="continue"]')
    }

    fillUserInformation(userInfo) {
        this.elements.firstNameInput().type(userInfo.firstName);
        this.elements.lastNameInput().type(userInfo.lastName);
        this.elements.postalCodeInput().type(userInfo.postalCode);
    }

    continueToOverview() {
        this.elements.continueButton().click();
    }
}

export const checkoutStepOne = new CheckoutStepOne();