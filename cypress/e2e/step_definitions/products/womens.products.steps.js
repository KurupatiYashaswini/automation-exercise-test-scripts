const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
// const username = 'medhanshi'

// Given('user is logged into the application', () => {
//     cy.visit("https://automationexercise.com/");   //user is login page to perfrom login 
//     cy.clickOnTheSignupOrLogin().click(); //call the method specified in the page.js file to perform login functionality
//     cy.url().should('include', '/login') //text included in url
//     cy.loginWithValidUser(); //call the method specified in the page.js file to perform login functionality
//     cy.contains(`Logged in as ${username}`).should('be.visible');
// });

When("user selects the Women category", () => {
    cy.womensCategory().click();
});

Then("user should see  dress, tops and saree  categories", () => {
    // cy.dressCategory().should('be.visible');
    // cy.topsCategory().should('be.visible');
    cy.sareeCategory().should('be.visible');

});

When("user selects the saree category", () => {
    cy.sareeCategory().click();
    cy.url().should('include', '/category_products/7')
});

Then("user should see the saree products", () => {
    cy.sareeProducts().should('be.visible');
});

When("user selects any product under saree category", () => {
    cy.sareeProduct().click();
});

