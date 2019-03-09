Feature: Canceling computer creation
  As a user of application
  I could cancel computer creation

  Scenario: Cancel computer creation
    Given App is opened
    When user click 'Add new computer' button
    And user input to fields:
      | Name              | SuperComp  |
      | Introduced date   | 2005-12-12 |
      | Discontinued date | 2017-05-05 |
      | Company name      | Sony       |
    And click 'Cancel' button
    Then user is redirected to main page
    And see No Notification message