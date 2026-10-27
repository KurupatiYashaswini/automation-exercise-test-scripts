Cypress.Commands.add('newUserName', () => {
    cy.get('[data-qa="signup-name"]')//pass the locators here
});

Cypress.Commands.add('newUserEmailAddress', ()=>{ //pass this method in the steps file
    cy.get('[data-qa="signup-email"]');
});

Cypress.Commands.add('signupButton', () =>{
    cy.get('[data-qa="signup-button"]');
});

Cypress.Commands.add('creatingAccountPage', () =>{
    cy.contains('b', 'Enter Account Information');
});

Cypress.Commands.add('userName', () =>{
    cy.get('[data-qa="name"]');
});

Cypress.Commands.add('userEmail', () =>{
    cy.get('[data-qa="email"]');
})

Cypress.Commands.add('userPassword', () =>{
    cy.get('[data-qa="password"]');
});

Cypress.Commands.add('userFirstName', () => {
    cy.get(' [data-qa="first_name"]')
});

Cypress.Commands.add('userLastName', () =>{
    cy.get('[data-qa="last_name"]');
});

Cypress.Commands.add('userAddress', () =>{
    cy.get('[data-qa="address"]');
});

Cypress.Commands.add('userCountry', () =>{
    cy.get('[data-qa="country"]');
});

Cypress.Commands.add('userState', () =>{
    cy.get('[data-qa="state"]');
});

Cypress.Commands.add('userCity', () =>{
    cy.get('[data-qa="city"]');
});

Cypress.Commands.add('userZipcode', () =>{
    cy.get('[data-qa="zipcode"]');
});

Cypress.Commands.add('userMobileNumber', () =>{
    cy.get('[data-qa="mobile_number"]');
});

Cypress.Commands.add('createAccountButton', () =>{
    cy.get('[data-qa="create-account"]');
});

Cypress.Commands.add('verifyAccountCreation', () =>{
    cy.contains('b', 'Account Created!'); //tagname, text 
    cy.contains('p', 'Congratulations! Your new account has been successfully created');
});