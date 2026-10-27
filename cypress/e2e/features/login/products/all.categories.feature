Feature: Add products from all  categories to cart

  Scenario: User adds one product from all  categories
    Given user is logged into the application

    When user navigates to All Products
    And user selects Men category
    And user selects Jeans subcategory
    And user adds a jeans product to the cart

    And user selects Women category
    And user selects Saree subcategory
    And user adds a saree product to the cart

    And user selects Kids category
    And user selects Dress subcategory
    And user adds a kids dress product to the cart

    When user navigates to the cart
    Then user should see the jeans product in the cart
    And user should see the saree product in the cart
    And user should see the kids dress product in the cart
    And cart should contain 3 products

    When user proceeds to checkout
    Then user should see the delivery address
    And user should see the products in the order summary

    When user clicks on Place Order
    Then user should see the payment page