class CheckoutComplete {
    elements = {
        ponyExpressImage: () => cy.get('img[data-test="pony-express"]'),
        completeHeader: () => cy.get('h2[data-test="complete-header"]'),
        completeText: () => cy.get('div[data-test="complete-text"]'),
        backToProductsButton: () => cy.get('button[id="back-to-products"]')
    }

    verifyOrderCompletion() {
        this.elements.ponyExpressImage().should('be.visible');
        this.elements.completeHeader().should('be.visible');
        this.elements.completeText().should('be.visible');
        this.elements.backToProductsButton().should('be.visible');
    }
}

export const checkoutComplete = new CheckoutComplete();
