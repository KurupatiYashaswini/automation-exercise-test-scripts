const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("the user is on the signup page", () => {
    cy.visit("https://automationexercise.com/login");
});

When("user enters name, email address and clicks on Signup button", () =>{
    cy.newUserName().clear().type('medhanshi');
    cy.newUserEmailAddress().clear().type('medhanshi@gmail.com');
    cy.signupButton().click();
});

Then("user should navigate to account creation page", () => {
    cy.creatingAccountPage().should('be.visible');
});

When("user enters all the required fields in creating account page and click on Create Account button", () =>{
    //cy.userName().type('Krishna');  //name already passed during the signup step
    //cy.userEmail().should('have.value', 'krishnaaa@gmail.com');
    cy.userPassword().type('medhanshi@123');
    cy.userFirstName().type('medhanshi');
    cy.userLastName().type('k');
    cy.userAddress().type('jmd');
    cy.userCountry().select('India');
    cy.userState().type('AP');
    cy.userCity().type('Hyd');
    cy.userZipcode().type('514243');
    cy.userMobileNumber().type('7836778987');
    cy.createAccountButton().click();

});
Then("new user able to create their account successfully", () => {
    cy.verifyAccountCreation().should('be.visible');
    cy.url().should("eq", "https://automationexercise.com/account_created");  //entire url
    cy.url().should('include', 'account_created') //text included in url

});









    