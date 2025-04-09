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
        login.visit(this.testData.baseUrl);
        login.fillUserPassAndLogin(this.testData.credentials);

        // Inventory Page
        inventory.verifyProductInInventory(this.testData.products);
        inventory.addAllProductsToCart();
        inventory.goToCart();

        // Cart Page
        cart.verifyProductInCart(this.testData.products);
        cart.proceedToCheckout();

        // Checkout Information
        checkout.fillUserInformation(this.testData.userInfo);
        checkout.continueToOverview();

        // Checkout Overview
        cart.verifyProductInCart(this.testData.products);
        checkout.completePurchase();

        // Order Completion
        checkout.verifyOrderCompletion();
    });
});