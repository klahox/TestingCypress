import 'cypress-xpath';
import { login } from '../support/pages/Login';
import { inventory } from '../support/pages/Inventory';
import { cart } from '../support/pages/Cart';

import { checkoutStepOne } from '../support/pages/CheckoutStepOne';
import { checkoutStepTwo } from '../support/pages/CheckoutStepTwo';
import { checkoutComplete } from '../support/pages/CheckoutComplete';

describe('Sauce Demo E2E test', () => {
    beforeEach(() => {
        cy.fixture('testData').as('testData');
    });

    it('should complete a purchase flow successfully', function() {
        // Login
        login.visit(this.testData.baseUrl);
        login.fillUserPassAndLogin(this.testData.credentials);

        // Inventory Page
        inventory.verifyProductInInventory(this.testData.products);
        inventory.addAllProductsToCart();
        inventory.goToCart();

        // Cart Page
        cart.verifyProductInCart(this.testData.products);
        cart.proceedToCheckout();

        // Checkout Step One Information
        checkoutStepOne.fillUserInformation(this.testData.userInfo);
        checkoutStepOne.continueToOverview();

        // Checkout Step Two Overview
        checkoutStepTwo.verifyProductInCheckout(this.testData.products);
        checkoutStepTwo.completePurchase();

        // Checkout Complete
        checkoutComplete.verifyOrderCompletion();
    });
});