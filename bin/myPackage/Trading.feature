@Sanity
Feature: trading Money

Scenario: Money request in INR
Given launch the application
When user enters valid USDollars 
And clicks on trade button
Then user get equavalent rupee
