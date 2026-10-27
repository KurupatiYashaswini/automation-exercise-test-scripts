Feature: Kids product functionality

  Scenario: Verify user is able to add a product into the cart

    Given user is logged into the application

    When user selects the products
    Then user should see the All Products Header

    When user selects the Kids category
    Then user should see dress, tops & shirts categories

    When user selects the dress category
    Then user should see the dress products

    When user selects any product under dress category
    And user adds the product to the cart
    Then the product should be added to the cart

    When user selects View Cart
    Then user should be able to see the product details in the cart

    When user selects Proceed To Checkout
    Then user should be able to see the address details

    When user selects Place Order button
    Then user should be able to see the Payment Header 
