Feature: Login Functionality

  Scenario Outline: Verify login with valid and invalid credentials

    Given user is on the home page

    When user clicks on login or signin button
    Then user navigates to login page

    When user enters "<email>" and "<password>"
    And user clicks on login button

    Then user should see "<result>"

    Examples:
      | email                    | password         | result                                   |
      | medhanshi@gmail.com      | medhanshi@123    | Logged in as                             |
      | medhanshi@gmail.com      | medha123         | Your email or password is incorrect!     |
      | medha@gmail.com          | medhanshi@123    | Your email or password is incorrect!     |
      | medha@gmail.com          | medha123         | Your email or password is incorrect!     |