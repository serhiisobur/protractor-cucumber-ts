Feature: Layout verification
  As a user of application
  I should see all element of the main page
  In order to interact with it

  Scenario: Main page layout verification
    Given user at the main page
    Then user see name of app "Play sample application — Computer database" in the header
    And user see amount of found computers
    And user see input field with placeholder "Filter by computer name..."
    And user see button "Filter by name"
    And user see button "Add a new computer" 
    And user see pagination block
    And User see table with 4 columns:
    | Name | Introduced | Discontinued | Company |
    

  Scenario: Add page layout verification
    Given user at the main page
    When user click on the Add new computer button
    Then  user go to the 'Add page'
    And user see input field "name" with label "Computer name"
    And user see another input field "introduced" with label "Introduced date"
    And user see one more input field "discontinued" with label "Discontinued date"
    And user see selectbox "company" with label "Company"
    And user see button with name "Create this computer"
    And user see one more button with label "Cancel"
