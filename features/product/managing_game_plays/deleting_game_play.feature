@managing_game_plays
Feature: Deleting a game play
    In order to get rid of deprecated game plays
    As an Administrator
    I want to be able to delete game plays

    Background:
        Given there is customer with email "kevin@example.com"
        And there is customer with email "blue@example.com"
        And there is product "Puerto Rico"
        And this product has one game play from customer "kevin@example.com"
        And this product has one game play from customer "blue@example.com"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a game play
        Given I want to browse game plays
        When I delete game play of "Puerto Rico" played by "kevin@example.com"
        Then I should be notified that it has been successfully deleted
        And there should not be game play of "Puerto Rico" played by "kevin@example.com" anymore

    @ui
    Scenario: Deleting a game play with comments
        Given there is product "Dream Factory"
        And this product has one game play from customer "kevin@example.com" with 2 comments
        And I want to browse game plays
        When I delete game play of "Dream Factory" played by "kevin@example.com"
        Then I should be notified that it has been successfully deleted
        And there should not be game play of "Dream Factory" played by "kevin@example.com" anymore
