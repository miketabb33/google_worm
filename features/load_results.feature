@javascript
Feature: Behavior Tests

  Scenario: Load Results
    Given I am at the website
    And Harry Potter is in the text field
    When I click search
    Then results should render

  Scenario: Load more results
    Given I am at the website
    And Harry Potter is in the text field
    When I click search
    And scroll to the bottom of the page
    Then more results should render

  Scenario: Check that 'loading result...' appears after successful search with results
    Given I am at the website
    And Harry Potter is in the text field
    When I click search
    Then loading result should appear

  Scenario: Check that 'No results for x' appears after successful search with no results
    Given I am at the website
    And ddhdjdhdjddrdrd is in the text field
    When I click search
    Then no results for x should appear
    And About 0 results should appear 

  Scenario: Check that 'loading more result...' appears after successful search with many results and after scrolling to the bottom of the page
    Given I am at the website
    And Harry Potter is in the text field
    When I click search
    And scroll to the bottom of the page
    Then loading more result should appear

  Scenario: Check that 'No more result' appears after successful search with few results and after scrolling to the bottom of the page
    Given I am at the website
    And robinsaver is in the text field
    When I click search
    And scroll to the bottom of the page
    Then no more results should appear

  Scenario: Check that requested results populate on page, specified book: Harry Potter and the Sorcerer's Stone
    Given I am at the website
    And Harry Potter is in the text field
    When I click search
    Then specified title should appear
    And specified author should appear
    And specified publisher_publishdate should appear
    And specified pagecount should appear
    And specified category should appear
    And Amazon appear
    And Preview appear
    And More Info appear

