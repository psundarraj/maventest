Feature: Login to account
@Smoke

Scenario: Valid username and password
Given launch the application
When user enters valid username and password
# this is called as data table
|userName	|password	|level		|
|scott		|tiger		|Developer|
|Sundar		|Hello222	|Manager	|
And clicks on login button
Then user logged into the application


Scenario: Valid username and Invalidpassword
Given launch the application
When user enters invalid username and password
|userName	|password	|
|Hi				|bye			|
And clicks on login button
Then user get login Failed error