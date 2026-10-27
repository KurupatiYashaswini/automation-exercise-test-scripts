Cypress.Commands.add('clickOnTheSignupOrLogin', () => { //follow camel case
    cy.get('a[href="/login"]');
});

Cypress.Commands.add('newUserSignupHeader', () => {
    cy.contains('h2', 'New User Signup!');
});