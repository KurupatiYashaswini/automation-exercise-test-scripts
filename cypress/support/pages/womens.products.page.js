Cypress.Commands.add('productsButton', () => {
    cy.get('a[href="/products"]')
});

Cypress.Commands.add('allProductsHeader', () => {
    cy.contains('h2', 'All Products')
});

Cypress.Commands.add('womensCategory', () => {
    cy.get('a[href="#Women"]')
});

// Cypress.Commands.add('dressCategory', () => {
//     cy.get('#Women a[href="/category_products/1"]')
// });

// Cypress.Commands.add('topsCategory', () => {
//     cy.get('#Women a[href="/category_products/2"]')
// });

Cypress.Commands.add('sareeCategory', () => {
    cy.get('#Women a[href="/category_products/7"]')
});

Cypress.Commands.add('sareeProducts', () => {
    cy.get('.features_items .productinfo')
});

Cypress.Commands.add('sareeProduct', () => {
    cy.get('.features_items .productinfo').first()
});

Cypress.Commands.add('addToCartButton', () => {
    cy.get('.add-to-cart').first()
});

Cypress.Commands.add('productAddedMessage', () => {
    cy.contains('p', 'Your product has been added to cart.');
});


Cypress.Commands.add('viewCartButton', () => {
    cy.get('#cartModal').find('a[href="/view_cart"]').click();
});

Cypress.Commands.add('viewCartButton', () => {
    cy.get('#cartModal').find('a[href="/view_cart"]');
});

Cypress.Commands.add('cartProductDetails', () => {
    cy.get('#cart_info_table tbody tr')
});

Cypress.Commands.add('proceedToCheckoutButton', () => {
    cy.contains('a', 'Proceed To Checkout')
});

Cypress.Commands.add('addressDetails', () => {
    cy.get('#address_delivery')
});

Cypress.Commands.add('checkoutProductDetails', () => {
    cy.get('#cart_info_table')
});

Cypress.Commands.add('placeOrderButton', () => {
    cy.contains('a', 'Place Order')
});

Cypress.Commands.add('paymentHeader', () => {
    cy.contains('h2', 'Payment')
});


