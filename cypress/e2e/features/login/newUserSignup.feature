Feature: Verify new user Signup functionality
    
    Scenario: Verify the new user Signup page

    Given the user is on the signup page
    When user enters name, email address and clicks on Signup button
    Then user should navigate to account creation page

    When user enters all the required fields in creating account page and click on Create Account button
    Then new user able to create their account successfully