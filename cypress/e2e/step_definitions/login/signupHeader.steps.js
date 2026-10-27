const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("User launch the application", () => {
    cy.visit("https://automationexercise.com/");
});

When("User clicks on login or signup button", () => {
    //cy.get('a[href="/login"]').click(); //hardingcoding the locators 
    cy.clickOnTheSignupOrLogin().click(); //call the method specified in the page.js file
});

Then("User should see New user Signup Header", () => {
   // cy.contains('h2', 'New User Signup!').should('be.visible'); //harding coding the locators
   cy.newUserSignupHeader().should('be.visible');
   cy.url().should("eq", "https://automationexercise.com/login");
});
