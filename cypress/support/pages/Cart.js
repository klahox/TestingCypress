import { verifyProductDetails } from '../utils/productsUtils';

class Cart {
    elements = {
        cartItems: () => cy.get("div[data-test='inventory-item']"),
        checkoutButton: () => cy.get('button[id="checkout"]')
    }

    verifyProductInCart(expectedProducts) {
        verifyProductDetails(this.elements.cartItems(), expectedProducts);
    }

    proceedToCheckout() {
        this.elements.checkoutButton().click();
    }
}

export const cart = new Cart(); 