Cypress.Commands.add("loginOrSigninButtton", () => {
    return cy.get('a[href="/login"]');
});

Cypress.Commands.add("homePage", () => {
    return cy.contains("a", "Logged in as");
});

Cypress.Commands.add("logoutButton", () => {
    return cy.get('a[href="/logout"]');
});

Cypress.Commands.add("userEmailAddress", () => {
    return cy.get('input[data-qa="login-email"]');
});

Cypress.Commands.add("userPassowrd", () => {
    return cy.get('input[data-qa="login-password"]');
});

Cypress.Commands.add("clickOnLogin", () => {
    return cy.get('button[data-qa="login-button"]');
});

Cypress.Commands.add("loginOrSigninButtton", () => {
    return cy.get('a[href="/login"]');
});

Cypress.Commands.add("homePage", () => {
    return cy.contains("a", "Logged in as");
});

Cypress.Commands.add("logoutButton", () => {
    return cy.get('a[href="/logout"]');
});

Cypress.Commands.add("loginWithValidUser", () => {
    cy.fixture("loginTestData").then((data) => {
        cy.userEmailAddress().clear().type(data.validUser.email);
        cy.userPassowrd().clear().type(data.validUser.password, { log: false });
        cy.clickOnLogin().click();
    });
});