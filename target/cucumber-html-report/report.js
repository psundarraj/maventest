$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Trading.feature");
formatter.feature({
  "line": 2,
  "name": "trading Money",
  "description": "",
  "id": "trading-money",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Money request in INR",
  "description": "",
  "id": "trading-money;money-request-in-inr",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters valid USDollars",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on trade button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user get equavalent rupee",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.launch_the_application()"
});
formatter.result({
  "duration": 120735564,
  "status": "passed"
});
formatter.match({
  "location": "TradingMoney.user_enters_valid_USDollars()"
});
formatter.result({
  "duration": 126732,
  "status": "passed"
});
formatter.match({
  "location": "TradingMoney.clicks_on_trade_button()"
});
formatter.result({
  "duration": 92818,
  "status": "passed"
});
formatter.match({
  "location": "TradingMoney.user_get_equavalent_rupee()"
});
formatter.result({
  "duration": 84786,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to account",
  "description": "",
  "id": "login-to-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Valid username and password",
  "description": "",
  "id": "login-to-account;valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters valid username and password",
  "rows": [
    {
      "comments": [
        {
          "line": 7,
          "value": "# this is called as data table"
        }
      ],
      "cells": [
        "userName",
        "password",
        "level"
      ],
      "line": 8
    },
    {
      "cells": [
        "scott",
        "tiger",
        "Developer"
      ],
      "line": 9
    },
    {
      "cells": [
        "Sundar",
        "Hello222",
        "Manager"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user logged into the application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.launch_the_application()"
});
formatter.result({
  "duration": 123609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 12
    }
  ],
  "location": "LoginStep.user_enters_valid_username_and_password(String,DataTable)"
});
formatter.result({
  "duration": 4283904,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicks_on_login_button()"
});
formatter.result({
  "duration": 79431,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_logged_into_the_application()"
});
formatter.result({
  "duration": 74968,
  "status": "passed"
});
formatter.uri("transfer.feature");
formatter.feature({
  "line": 2,
  "name": "transfer of Fund",
  "description": "",
  "id": "transfer-of-fund",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Successful fund transfer",
  "description": "",
  "id": "transfer-of-fund;successful-fund-transfer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "\"\u003csrc_status\u003e\" source account number",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"\u003cdest_status\u003e\" receiptent account number",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "with \"\u003cbalance_status\u003e\" balance",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"\u003ctransfer_status\u003e\" the amount",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "transfer-of-fund;successful-fund-transfer;",
  "rows": [
    {
      "cells": [
        "src_status",
        "dest_status",
        "balance_status",
        "transfer_status"
      ],
      "line": 11,
      "id": "transfer-of-fund;successful-fund-transfer;;1"
    },
    {
      "cells": [
        "valid",
        "valid",
        "sufficent",
        "successful"
      ],
      "line": 12,
      "id": "transfer-of-fund;successful-fund-transfer;;2"
    },
    {
      "cells": [
        "valid",
        "invalid",
        "insufficient",
        "unsuccessful"
      ],
      "line": 13,
      "id": "transfer-of-fund;successful-fund-transfer;;3"
    },
    {
      "cells": [
        "invalid",
        "valid",
        "insufficient",
        "unsuccessful"
      ],
      "line": 14,
      "id": "transfer-of-fund;successful-fund-transfer;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Successful fund transfer",
  "description": "",
  "id": "transfer-of-fund;successful-fund-transfer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "\"valid\" source account number",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"valid\" receiptent account number",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "with \"sufficent\" balance",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"successful\" the amount",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 1
    }
  ],
  "location": "TransferStep.source_account_number(String)"
});
formatter.result({
  "duration": 257926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 1
    }
  ],
  "location": "TransferStep.receiptent_account_number(String)"
});
formatter.result({
  "duration": 136996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sufficent",
      "offset": 6
    }
  ],
  "location": "TransferStep.with_balance(String)"
});
formatter.result({
  "duration": 122270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "successful",
      "offset": 1
    }
  ],
  "location": "TransferStep.the_amount(String)"
});
formatter.result({
  "duration": 173588,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful fund transfer",
  "description": "",
  "id": "transfer-of-fund;successful-fund-transfer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "\"valid\" source account number",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"invalid\" receiptent account number",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "with \"insufficient\" balance",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"unsuccessful\" the amount",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 1
    }
  ],
  "location": "TransferStep.source_account_number(String)"
});
formatter.result({
  "duration": 121378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 1
    }
  ],
  "location": "TransferStep.receiptent_account_number(String)"
});
formatter.result({
  "duration": 113791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "insufficient",
      "offset": 6
    }
  ],
  "location": "TransferStep.with_balance(String)"
});
formatter.result({
  "duration": 112899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unsuccessful",
      "offset": 1
    }
  ],
  "location": "TransferStep.the_amount(String)"
});
formatter.result({
  "duration": 104866,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Successful fund transfer",
  "description": "",
  "id": "transfer-of-fund;successful-fund-transfer;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "\"invalid\" source account number",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\"valid\" receiptent account number",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "with \"insufficient\" balance",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"unsuccessful\" the amount",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 1
    }
  ],
  "location": "TransferStep.source_account_number(String)"
});
formatter.result({
  "duration": 113791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 1
    }
  ],
  "location": "TransferStep.receiptent_account_number(String)"
});
formatter.result({
  "duration": 125840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "insufficient",
      "offset": 6
    }
  ],
  "location": "TransferStep.with_balance(String)"
});
formatter.result({
  "duration": 125393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unsuccessful",
      "offset": 1
    }
  ],
  "location": "TransferStep.the_amount(String)"
});
formatter.result({
  "duration": 116469,
  "status": "passed"
});
});