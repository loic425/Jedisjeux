@viewing_year_awards
Feature: Viewing year awards
    In order to see year awards
    As a Visitor
    I want to be able to view year awards list

    Background:
        Given there is a product "Puerto Rico"
        And there is a game award "Spiel des Jahres"
        And this game award has been celebrated in "2018"
        And this game award has also been celebrated in "2017"
        And this game award has also been celebrated in "2016"
        And there is a game award "As d'or"
        And this game award has been celebrated in "2018"
        And I am a logged in customer

    @ui
    Scenario: Viewing filtered year awards by specific award
        When I view year awards from "Spiel des Jahres"
        Then I should see the year award "Spiel des Jahres 2018"
        And I should see the year award "Spiel des Jahres 2017"
        And I should see the year award "Spiel des Jahres 2016"
        But I should not see the year award "As d'or 2018"
