const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const username = 'medhanshi'

Given("user is on the login page", () => {
    cy.visit("https://automationexercise.com/");
});

When("user clicks on login or signin button", () => {
    cy.loginOrSigninButtton().click();
});

Then("user navigates to login page", () => {
    cy.url().should("include", "/login"); 
});

When("user enter valid email address, password, clicks on login button", () => {
    cy.fixture("loginTestData").then((data) => {
    cy.userEmailAddress().clear().type(data.validUser.email);
    cy.userPassowrd().clear().type(data.validUser.password, { log: false });
    cy.clickOnLogin().click();
    });
});

Then("user should see logged in as {string}", (username) => {
    cy.homePage().should("be.visible").and("contain.text", "Logged in as");
    // cy.homePage().find("b").should("have.text", username);
});

When("user clicks on logout button", () => {
    cy.logoutButton().click();
});

Then("user should navigate to login page", () => {
    cy.url().should("include", "/login");                       // these 2 are used for url validations 
    // cy.location("pathname").should("eq", "/login");
});