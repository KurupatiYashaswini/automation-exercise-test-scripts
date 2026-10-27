const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const username = 'medhanshi'

When("user selects the Kids category", () => {
    cy.kidsCategory().click();
});

Then("user should see dress, tops & shirts categories", () => {
    cy.dressCategory().should('be.visible');
    // cy.topsAndShirtsCategory().should('be.visible');

});

When("user selects the dress category", () => {
    cy.dressCategory().click();
    cy.url().should('include', '/category_products/4')
});

Then("user should see the dress products", () => {
    cy.dressProducts().should('be.visible');
});

When("user selects any product under dress category", () => {
    cy.dressProduct().click();
});