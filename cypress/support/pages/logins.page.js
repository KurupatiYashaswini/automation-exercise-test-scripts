Cypress.Commands.add("loginOrSigninButton", () => {
    cy.get('a[href="/login"]');
});

Cypress.Commands.add("userEmailAddress", () => {
    cy.get('input[data-qa="login-email"]');
});

Cypress.Commands.add("userPassword", () => {
    cy.get('input[data-qa="login-password"]');
});

Cypress.Commands.add("loginButton", () => {
    cy.get('button[data-qa="login-button"]');
});

Cypress.Commands.add("loggedInUser", () => {
    cy.contains('a', 'Logged in as');
});

Cypress.Commands.add("invalidLoginError", () => {
    cy.get('form[action="/login"] p');
});