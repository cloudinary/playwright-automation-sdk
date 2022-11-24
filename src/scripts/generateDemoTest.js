#!/usr/bin/env node
const fs = require('fs');
/**
 * ====================================================================================================================
 * Create a sample test for test project
 * ====================================================================================================================
 */
const testContent = "import { RequestUtils, Reporter  } from 'playwright-automation-sdk';\n" +
    "import { expect, test } from '@playwright/test';\n" +
    "\n" +
    "test.describe('GET request', () => {\n" +
    "  test('url only', async ({ request }) => {\n" +
    "    Reporter.info('Test get url without options');\n" +
    "    const response = await RequestUtils.getRequest(request, 'docs/test-api-testing#writing-api-test');\n" +
    "\n" +
    "    Reporter.info('Validate return status is 200');\n" +
    "    expect(response.status()).toEqual(200);\n" +
    "  });\n" +
    "\n" +
    "  test('base url only', async ({ request }) => {\n" +
    "    const response = await RequestUtils.getRequest(request, '');\n" +
    "    expect(response.status()).toEqual(200);\n" +
    "  });\n" +
    "\n" +
    "  test('with options', async ({ request }) => {\n" +
    "    try {\n" +
    "      await RequestUtils.getRequest(request, '', { timeout: 1 });\n" +
    "    } catch (error) {\n" +
    "      expect(String(error)).toContain('Request timed out after 1ms');\n" +
    "    }\n" +
    "  });\n" +
    "});\n"
const targetFolder = "./tests";

if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
    fs.writeFileSync(targetFolder + '/demoTest.spec.ts', testContent);

}
