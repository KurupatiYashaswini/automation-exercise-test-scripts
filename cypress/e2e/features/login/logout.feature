Feature:  logout functionality 

    Scenario: verify user logout successfully

        Given user is on the login page
        When user clicks on login or signin button
        Then user navigates to login page

        When user enter valid email address, password, clicks on login button 
        Then user should see logged in as "username"

        When user clicks on logout button 
        Then user should navigate to login page 

