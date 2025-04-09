import { verifyProductDetails } from '../utils/productsUtils';

class CheckoutStepTwo {
    elements = {
        overviewItems: () => cy.get("div[data-test='inventory-item']"),
        finishButton: () => cy.get('button[id="finish"]'),

    }

    verifyProductInCheckout(expectedProducts) {
        verifyProductDetails(this.elements.overviewItems(), expectedProducts);  
    }

    completePurchase() {
        this.elements.finishButton().click();
    }


}

export const checkoutStepTwo = new CheckoutStepTwo(); 