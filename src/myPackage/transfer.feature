@Sanity
Feature: transfer of Fund

Scenario Outline: Successful fund transfer
Given "<src_status>" source account number
And "<dest_status>" receiptent account number
And with "<balance_status>" balance
Then "<transfer_status>" the amount

Examples:
|src_status	|dest_status	|balance_status	|transfer_status|
|valid			|valid				|sufficent			|successful			|
|valid			|invalid			|insufficient		|unsuccessful		|
|invalid		|valid				|insufficient		|unsuccessful		|