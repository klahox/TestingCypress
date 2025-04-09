import 'cypress-xpath';
import { login } from '../support/pages/Login';
import { inventory } from '../support/pages/Inventory';
import { cart } from '../support/pages/Cart';
import { checkout } from '../support/pages/Checkout';

describe('Sauce Demo E2E test', () => {
    beforeEach(() => {
        cy.fixture('testData').as('testData');
    });

    it('should complete a purchase flow successfully', function() {
        // Login
        login.visit();
        login.fillUserPassAndLogin();

        // Inventory Page
        inventory.verifyProductDetails(this.testData.products);
        inventory.addAllProductsToCart();
        inventory.goToCart();

        // Cart Page
        cart.verifyProductDetails(this.testData.products);
        cart.proceedToCheckout();

        // Checkout Information
        checkout.fillUserInformation(this.testData.userInfo);
        checkout.continueToOverview();

        // Checkout Overview
        cart.verifyProductDetails(this.testData.products);
        checkout.completePurchase();

        // Order Completion
        checkout.verifyOrderCompletion();
    });
});