Feature: AccountPage

  I want to access AccountPage

  Scenario: I can access AccountPage
    When I navigate to "/account"
    Then I see the main header "Accounts"
