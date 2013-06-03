Feature: demo

  Scenario: More on this story text
    When I open an article
    Then I should see an option to read more on the story

  Scenario: Loading more content
    Given I open the responsive site
    When I choose to read more content
    Then I should receive more headlines
