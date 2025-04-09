class Cart {
    elements = {
        checkoutButton: () => cy.get('button[id="checkout"]'),
        inventoryItems: () => cy.get("div[data-test='inventory-item']"),
        itemName: () => cy.get("div[data-test='inventory-item-name']"),
        itemPrice: () => cy.get("div[data-test='inventory-item-price']")
    }

    verifyProductDetails(expectedProducts) {
        this.elements.inventoryItems().each(($elem) => {
            const name = $elem.find("div[data-test='inventory-item-name']").text().trim();
            const price = parseFloat($elem.find("div[data-test='inventory-item-price']").text().replace('$', ''));
            
            expect(expectedProducts).to.have.property(name);
            expect(price).to.equal(expectedProducts[name]);
        });
    }

    proceedToCheckout() {
        this.elements.checkoutButton().click();
    }
}

export const cart = new Cart(); 