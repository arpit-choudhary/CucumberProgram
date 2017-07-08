$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('testCases\Login.feature');
formatter.feature({
  "line": 1,
  "name": "Testing Login functionality",
  "description": "",
  "id": "testing-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "With Valid Credentials",
  "description": "",
  "id": "testing-login-functionality;with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on sigin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "CopyOfSteps.User_is_on_the_Login_page()"
});
formatter.result({
  "duration": 8893038413,
  "status": "passed"
});
formatter.match({
  "location": "CopyOfSteps.User_enters_username()"
});
formatter.result({
  "duration": 146807690,
  "status": "passed"
});
formatter.match({
  "location": "CopyOfSteps.User_enters_password()"
});
formatter.result({
  "duration": 2427483283,
  "status": "passed"
});
formatter.match({
  "location": "CopyOfSteps.User_clicks_on_sigin_button()"
});
formatter.result({
  "duration": 24375,
  "status": "passed"
});
formatter.match({
  "location": "CopyOfSteps.User_should_be_logged_in()"
});
formatter.result({
  "duration": 23520,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "With InValid Credentials",
  "description": "",
  "id": "testing-login-functionality;with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters incorrect username \"abc\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters incorrect password \"abc\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on sigin button \"arp\" \"ank\" \"sev\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should not be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "CopyOfSteps.User_is_on_the_Login_page()"
});
formatter.result({
  "duration": 8142042560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 32
    }
  ],
  "location": "CopyOfSteps.User_enters_incorrect_username(String)"
});
formatter.result({
  "duration": 119390775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 32
    }
  ],
  "location": "CopyOfSteps.User_enters_incorrect_password(String)"
});
formatter.result({
  "duration": 2182329127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arp",
      "offset": 29
    },
    {
      "val": "ank",
      "offset": 35
    },
    {
      "val": "sev",
      "offset": 41
    }
  ],
  "location": "CopyOfSteps.User_clicks_on_sigin_button(String,String,String)"
});
formatter.result({
  "duration": 115461,
  "status": "passed"
});
formatter.match({
  "location": "CopyOfSteps.User_should_not_be_logged_in()"
});
formatter.result({
  "duration": 20954,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "With InValid Credentials",
  "description": "",
  "id": "testing-login-functionality;with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters incorrect username \"def\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters incorrect password \"def\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on sigin button \"arp\" \"ank\" \"sev\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should not be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "CopyOfSteps.User_is_on_the_Login_page()"
});
formatter.result({
  "duration": 7750273151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def",
      "offset": 32
    }
  ],
  "location": "CopyOfSteps.User_enters_incorrect_username(String)"
});
formatter.result({
  "duration": 114062880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def",
      "offset": 32
    }
  ],
  "location": "CopyOfSteps.User_enters_incorrect_password(String)"
});
formatter.result({
  "duration": 339175103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arp",
      "offset": 29
    },
    {
      "val": "ank",
      "offset": 35
    },
    {
      "val": "sev",
      "offset": 41
    }
  ],
  "location": "CopyOfSteps.User_clicks_on_sigin_button(String,String,String)"
});
formatter.result({
  "duration": 65856,
  "status": "passed"
});
formatter.match({
  "location": "CopyOfSteps.User_should_not_be_logged_in()"
});
formatter.result({
  "duration": 13685,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "With InValid Credentials",
  "description": "",
  "id": "testing-login-functionality;with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters incorrect username \"xyz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters incorrect password \"xyzz\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on sigin button \"arp\" \"ank\" \"sev\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should not be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "CopyOfSteps.User_is_on_the_Login_page()"
});
formatter.result({
  "duration": 9282083793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 32
    }
  ],
  "location": "CopyOfSteps.User_enters_incorrect_username(String)"
});
formatter.result({
  "duration": 115316704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyzz",
      "offset": 32
    }
  ],
  "location": "CopyOfSteps.User_enters_incorrect_password(String)"
});
formatter.result({
  "duration": 643148637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arp",
      "offset": 29
    },
    {
      "val": "ank",
      "offset": 35
    },
    {
      "val": "sev",
      "offset": 41
    }
  ],
  "location": "CopyOfSteps.User_clicks_on_sigin_button(String,String,String)"
});
formatter.result({
  "duration": 64573,
  "status": "passed"
});
formatter.match({
  "location": "CopyOfSteps.User_should_not_be_logged_in()"
});
formatter.result({
  "duration": 14112,
  "status": "passed"
});
});