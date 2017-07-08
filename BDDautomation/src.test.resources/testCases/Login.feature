Feature: Testing Login functionality
 
 Scenario: With Valid Credentials
    Given User is on the Login page
	When user enters username
	And user enters password
	And User clicks on sigin button
	Then User should be logged in
	
	
	Scenario Outline: With InValid Credentials
    Given User is on the Login page
	When User enters incorrect username "<testname>"
	And User enters incorrect password "<testpwd>"
	And User clicks on sigin button "arp" "ank" "sev"
	Then User should not be logged in
	
	#Parameterisation
	
	Examples:
	|testname| |testpwd|
	|abc| |abc|
	|def| |def|
	|xyz| |xyzz|