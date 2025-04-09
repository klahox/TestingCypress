export const verifyProductDetails = (container, expectedProducts) => {
    // First verify we have the expected number of items
    container.should('have.length', Object.keys(expectedProducts).length);

    container.each(($elem) => {
        const name = $elem.find("div[data-test='inventory-item-name']").text().trim();
        const price = parseFloat($elem.find("div[data-test='inventory-item-price']").text().replace('$', ''));
        
        // Log the current item being verified
        cy.log(`Verifying product: ${name} with price: ${price}`);

        // Check if the product exists in our expected products
        if (!expectedProducts[name]) {
            throw new Error(`Product "${name}" not found in expected products. Available products: ${Object.keys(expectedProducts).join(', ')}`);
        }

        // Verify the price matches
        expect(price).to.equal(expectedProducts[name], `Price mismatch for ${name}. Expected: ${expectedProducts[name]}, Actual: ${price}`);
    });
};