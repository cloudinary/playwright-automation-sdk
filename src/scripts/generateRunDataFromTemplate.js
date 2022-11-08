#!/usr/bin/env node
const fs = require('fs');
/**
 * Creates a TestRunData.ts with template data
 *
 * Does not overwrite if already exist
 *
 * TestRunData.ts holds data required for test execution.
 * For local execution once the script executed, one need to fill data in the file
 *
 * For CI run TestRunData.ts file should be downloaded from s3 bucket
 * https://cld-qa-automation-config.s3.amazonaws.com/<PROJECT_NAME>/TestRunData.ts
 *
 * Those file is "gitignored".
 * Since it's imported in the test code, we need to create it (from the template) before compilation
 */

const targetFilePath = "./TestRunData.json";
const templateData = [
  {
    "description": "TEMPLATE FOR TEST DATA FOR DEVELOPER",
    "dataTag": "anyUserTag",
    "apiDomain": "apiDomain",
    "cloudName": "cloudName",
    "apiKey": "ApiKey",
    "apiSecret": "ApiSecret",
    "provisioningAccountId": "provisioningAccountId",
    "provisioningKey": "provisioningKey",
    "provisioningSecret": "provisioningSecret"
  }
];
if (!fs.existsSync(targetFilePath)) {
  fs.writeFileSync(targetFilePath, JSON.stringify(templateData, undefined, 2));
}

