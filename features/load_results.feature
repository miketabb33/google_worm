@javascript
Feature: Load Results

  Scenario: Load Results
    Given I am at the website
    And the textfield is not blank
    When I click search
    Then results should render