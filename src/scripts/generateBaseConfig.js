#!/usr/bin/env node

/**
 * Generates playwright.config.ts under root folder of the test project.
 * Extends base configuration found under tests folder.
 * for more information see: https://playwright.dev/docs/test-configuration
 */

const fs = require('fs');

const configContent = "import dotenv from 'dotenv';\n" +
    "import {config} from \"playwright-automation-sdk\";\n" +
    "/**\n" +
    " * Read environment variables from file.\n" +
    " * https://github.com/motdotla/dotenv\n" +
    " */\n" +
    "dotenv.config();\n" +
    "\n" +
    "/**\n" +
    " * See https://playwright.dev/docs/test-configuration.\n" +
    " */\n" +
    "const myConfig = {\n" +
    "  ...config,\n" +
    "  testDir: './tests/',\n" +
    "\n" +
    "};\n" +
    "\n" +
    "export default myConfig;\n"

const targetFile = "./playwright.config.ts";

if (!fs.existsSync(targetFile)) {
    fs.writeFileSync(targetFile, configContent);
}