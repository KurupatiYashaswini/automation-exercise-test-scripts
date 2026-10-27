
Cypress.Commands.add('productsButton', () => {
    cy.get('a[href="/products"]')
});

Cypress.Commands.add('allProductsHeader', () => {
    cy.contains('h2', 'All Products')
});

// Men Category

Cypress.Commands.add('menCategory', () => {
    cy.get('a[href="#Men"]')
});

Cypress.Commands.add('jeansCategory', () => {
    cy.get('#Men a[href="/category_products/6"]')
});

Cypress.Commands.add('tshirtsCategory', () => {
    cy.get('#Men a[href="/category_products/3"]')
});

// Jeans Products

Cypress.Commands.add('jeansProducts', () => {
    cy.get('.features_items .productinfo')
});

Cypress.Commands.add('jeansProduct', () => {
    cy.get('.features_items .productinfo').first()
});

// Add To Cart

Cypress.Commands.add('addToCartButton', () => {
    cy.get('.add-to-cart').first()
});

// Cypress.Commands.add('addedToCartMessage', () => {
//     cy.contains('h4', 'Added!')
// });

Cypress.Commands.add('productAddedMessage', () => {
    cy.contains('p', 'Your product has been added to cart.');
});


Cypress.Commands.add('viewCartButton', () => {
    cy.get('#cartModal').find('a[href="/view_cart"]').click();
});

// Cart

// Cypress.Commands.add('viewCartButton', () => {
//     cy.get('a[href="/view_cart"]').first()
// });

Cypress.Commands.add('viewCartButton', () => {
    cy.get('#cartModal').find('a[href="/view_cart"]');
});

Cypress.Commands.add('cartProductDetails', () => {
    cy.get('#cart_info_table tbody tr')
});


// Checkout

Cypress.Commands.add('proceedToCheckout', () => {
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


// Payment

Cypress.Commands.add('paymentHeader', () => {
    cy.contains('h2', 'Payment')
});

// women
Cypress.Commands.add('womensCategory', () => {
    cy.get('a[href="#Women"]')
});

// Cypress.Commands.add('sareeCategory', () => {
//     cy.get('#Women a[href="/category_products/7"]')
// });

Cypress.Commands.add('sareeCategory', () => {
    cy.get('#Women').find('Saree');
});

Cypress.Commands.add('sareeProducts', () => {
    cy.get('.features_items .productinfo')
});

Cypress.Commands.add('sareeProduct', () => {
    cy.get('.features_items .productinfo').first()
});

// kids

Cypress.Commands.add('kidsCategory', () => {
    cy.get('a[href="#Kids"]')
});

Cypress.Commands.add('KidsDressProduct', () => {
    cy.contains('a', 'Dress')
})

Cypress.Commands.add('dressCategory', () => {
    cy.get('a[href="/category_products/4"]')
});

Cypress.Commands.add('dressProducts', () => {
    cy.get('.features_items .productinfo')
});

Cypress.Commands.add('dressProduct', () => {
    cy.get('.features_items .productinfo').first()
});