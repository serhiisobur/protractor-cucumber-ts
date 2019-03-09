Feature: Computer counter work correctly
  After any manipulations with computers
  Counter should be changed

  Scenario: After adding a new computer counter increase by 1
    Given user see computer count at the main page
    When user click on the Add new computer button
    And user input to fields:
      | Name              | Alfa       |
      | Introduced date   | 2007-02-02 |
      | Discontinued date | 2017-02-02 |
      | Company name      | Sony       |
    And click Create this computer button
    Then counter is increase by "1"


  Scenario: After deleting computer counter is equal to one in precondition
    Given user at the main page
    When user delete computer "Alfa"
    Then counter is reduce by "1"
