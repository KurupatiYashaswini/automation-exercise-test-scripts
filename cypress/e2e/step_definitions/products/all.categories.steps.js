const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// men

When("user navigates to All Products", () => {
    cy.productsButton().should("be.visible").click();
    cy.allProductsHeader().should("be.visible");
});

When("user selects Men category", () => {
    cy.menCategory().should("be.visible").click();
});

When("user selects Jeans subcategory", () => {
    cy.jeansCategory().should("be.visible").click();
});


When("user adds a jeans product to the cart", () => {
    cy.addToCartButton().should("be.visible").click();
});

//  women

When("user selects Women category", () => {
    cy.womensCategory().should("be.visible").click();
});

// When("user selects Saree subcategory", () => {
//     cy.sareeCategory().should("be.visible").click();
// });

When("user selects Saree subcategory", () => {
    cy.sareeCategory().click();
});

When("user adds a saree product to the cart", () => {
    cy.addToCartButton().should("be.visible").click();
});

//  kids

When("user selects Kids category", () => {
    cy.kidsCategory().should("be.visible").click();
});

When("user selects Dress subcategory", () => {
    cy.KidsDressProduct().should("be.visible");
});

When("user adds a kids dress product to the cart", () => {
    cy.addToCartButton().should("be.visible").click();
    // cy.continueShoppingButton().should("be.visible").click();
});

When("user navigates to the cart", () => {
    cy.viewCartButton().should("be.visible").click();
    cy.cartHeader().should("be.visible");
});

Then("user should see the jeans product in the cart", () => {
    cy.cartProduct("Soft Stretch Jeans").should("be.visible");
});

Then("user should see the saree product in the cart", () => {
    cy.cartProduct("Cotton Silk Hand Block Print Saree").should("be.visible");
});

Then("user should see the kids dress product in the cart", () => {
    cy.cartProduct("Sleeveless Unicorn Patch Gown - Pink").should("be.visible");
});

Then("cart should contain 3 products", () => {
    cy.cartProducts().should("have.length", 3);
});

When("user proceeds to checkout", () => {
    cy.proceedToCheckout().should("be.visible").click();
});

Then("user should see the delivery address", () => {
    cy.deliveryAddress().should("be.visible");
});

When("user clicks on Place Order", () => {
    cy.placeOrderButton().should("be.visible").click();
});

Then("user should see the payment page", () => {
    cy.paymentHeader().should("be.visible");
});