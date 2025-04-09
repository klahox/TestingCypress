import { verifyProductDetails } from '../utils/productsUtils';

class Page_02_Inventory {
    elements = {
        inventoryItems: () => cy.get("div[data-test='inventory-item']"),
        cartIcon: () => cy.get("div[id='shopping_cart_container']")
    }
    xpath = {
        itemName: 'div[data-test="inventory-item-name"]',
        itemPrice: 'div[data-test="inventory-item-price"]',
        addToCartButton: 'button'
    }

    verifyProductInInventory(expectedProducts) {
        verifyProductDetails(this.elements.inventoryItems(), expectedProducts);
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

export const inventory = new Page_02_Inventory(); 