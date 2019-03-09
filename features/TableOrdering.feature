Feature: After adding computer with different names
  its shown in table in alphabetical order

  Scenario: Adding new computers with similar names
    Given user at the main page
    When user adding new computer with name "AA"
    Then computer with name "AA" is shown in table

  Scenario: Added computer shown in table in alphabetical order
    Given user at the main page
    When user adding new computer with name "AAA"
    And user adding new computer with name "AAAA"
    Then user see its computers in table in alphabetic order


