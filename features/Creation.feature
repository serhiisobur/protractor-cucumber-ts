Feature: Adding new computer to the application
  As a user of application
  I could add new computer with parameters
  To the application

  Scenario: user go from main page to Add a computer page
    Given user at the main page
    When user click on the Add new computer button
    Then user go to the 'Add page'

  Scenario: user adding new computer
    Given user at the Add page
    When user input to fields:
      | Name              | Test computer |
      | Introduced date   | 2001-01-01    |
      | Discontinued date | 2017-01-01    |
      | Company name      | Sony          |
    And click Create this computer button
    Then user redirected to main page
    And see alert message "Done! Computer Test computer has been created"
    And computer is appeared in table
    And computer  has valid info which was entered by user

  Scenario: user add new computer without name
    Given user at the main page
    When user click on the Add new computer button
    And after that go to Add page
    And user click 'Create this computer' button
    Then user stays on same view
    And see highlighted 'Computer name' field