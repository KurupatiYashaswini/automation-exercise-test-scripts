const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("user is on the home page", () => {
    cy.visit("https://automationexercise.com/");
});

// When("user clicks on login or signin button", () => {
//     cy.loginOrSigninButton().click();
// });

// Then("user navigates to login page", () => {
//     cy.url().should("include", "/login");
// });

When("user enters {string} and {string}", (email, password) => {
    cy.userEmailAddress().clear().type(email);
    cy.userPassword().clear().type(password, { log: false });
});

When("user clicks on login button", () => {
    cy.loginButton().click();
});

Then("user should see {string}", (result) => {
    if (result === "Logged in as") {
        cy.loggedInUser().should("be.visible").and("contain.text", "Logged in as");
    } 
    else {
        cy.invalidLoginError().should("be.visible").and("have.text", result);
    }
});