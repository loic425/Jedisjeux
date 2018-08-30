@adding_topic_posts
Feature: Replying to topics
    In order to avoid making mistakes when adding posts
    As a Visitor
    I want to be prevented from adding it without specifying required fields

    Background:
        Given there are default taxonomies for topics
        And there is customer with email "kevin@example.com"
        And there is topic with title "Awesome topic" written by "kevin@example.com"
        And I am logged in as a customer

    @ui
    Scenario: Trying to add a new topic post without comment
        Given I want to reply to this topic
        When I do not leave any comment
        And I try to add it
        Then I should be notified that the comment is required
        And this post should not be added
