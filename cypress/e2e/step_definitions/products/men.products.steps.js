const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
// import '../support/loginpage';
const username = 'medhanshi'


Given('user is logged into the application', () => {
    cy.visit("https://automationexercise.com/");   //user is login page to perfrom login 
    cy.clickOnTheSignupOrLogin().click(); //call the method specified in the page.js file to perform login functionality
    cy.url().should('include', '/login') //text included in url
    cy.loginWithValidUser(); //call the method specified in the page.js file to perform login functionality
    cy.contains(`Logged in as ${username}`).should('be.visible');
});

// selcting a product from men category

When("user selects the products", () => {
    cy.productsButton().click();
});

Then("user should see the All Products Header", () => {
    cy.allProductsHeader().should('be.visible');
    cy.url().should('include', '/products')
});

When("user selects the Men category", () => {
    cy.menCategory().click();
});

Then("user should see Jeans and T-shirts categories", () => {
    cy.jeansCategory().should('be.visible');
    cy.tshirtsCategory().should('be.visible');
});

When("user selects the Jeans category", () => {
    cy.jeansCategory().click();
    cy.url().should('include', '/category_products/6')
});

Then("user should see the jeans products", () => {
    cy.jeansProducts().should('be.visible');
});

When("user selects any product under Jeans category", () => {
    cy.jeansProduct().click();
});


// adding product into the cart same for all categories

When("user adds the product to the cart", () => {
    cy.addToCartButton().click();
});

// Then("the product should be added to the cart", () => {
//     cy.addedToCartMessage().should('be.visible');
// });

Then("the product should be added to the cart", () => {
    cy.productAddedMessage().should('be.visible');
});

When("user selects View Cart", () => {
    cy.viewCartButton().click();
    cy.url().should('include', '/view_cart')
});

Then("user should be able to see the product details in the cart", () => {
    cy.cartProductDetails().should('be.visible');
});

When("user selects Proceed To Checkout", () => {
    cy.proceedToCheckoutButton().click();
});

Then("user should be able to see the address details", () => {
    cy.addressDetails().should('be.visible');
    cy.url().should('include', '/checkout')
});

When("user selects Place Order button", () => {
    cy.placeOrderButton().click();
});

Then("user should be able to see the Payment Header", () => {
    cy.paymentHeader().should('be.visible');
    cy.url().should('include', '/payment')
});

