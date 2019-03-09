Feature: Deleting of computer
  As a user of application
  I could delete any computer

  Scenario: user finds computer
    Given user at the main page
    When user search "Test computer" at main page
    Then user see "Test computer" at the page with search results


  Scenario: user choose and delete computer
    Given user see "Test computer" at the page with search results
    When user click to the "Test computer"
    And click 'Delete this computer' button
    Then user go to the main page
    And see alert message with text "Done! Computer has been deleted"