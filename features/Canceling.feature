Feature: Canceling computer creation
  As a user of application
  I could cancel computer creation

  Scenario: Cancel computer creation
    Given user at the main page
    When user click 'Add new computer' button
    And user input to fields:
      | Name      | Introduced date | Discontinued date | Company name |
      | SuperComp | 2005-12-12      | 2017-05-05        | Sony         |
    And user click 'Cancel' button
    Then user is redirected to main page