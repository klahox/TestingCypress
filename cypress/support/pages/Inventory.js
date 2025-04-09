class Inventory {
    elements = {
        inventoryItems: () => cy.get("div[data-test='inventory-item']"),
        itemName: () => cy.get("div[data-test='inventory-item-name']"),
        itemPrice: () => cy.get("div[data-test='inventory-item-price']"),
        addToCartButton: () => cy.get("button"),
        cartIcon: () => cy.get("div[id='shopping_cart_container']")
    }

    verifyProductDetails(expectedProducts) {
        this.elements.inventoryItems().each(($elem) => {
            const name = $elem.find("div[data-test='inventory-item-name']").text().trim();
            const price = parseFloat($elem.find("div[data-test='inventory-item-price']").text().replace('$', ''));
            
            expect(expectedProducts).to.have.property(name);
            expect(price).to.equal(expectedProducts[name]);
        });
    }

    addAllProductsToCart() {
        this.elements.inventoryItems().each(($elem) => {
            cy.wrap($elem).find('button').click();
        });
    }

    goToCart() {
        this.elements.cartIcon().click();
    }
}

export const inventory = new Inventory(); 