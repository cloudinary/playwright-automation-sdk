#!/usr/bin/env node

/**
 * Scripts that helps easy start of a test project.
 * once executed, it will generate all (basic) required data for test execution(including sample test)
 */
let child_process = require('child_process');


child_process.exec(`node ${__dirname}/generateDemoTest.js`, (error, stdout, stderr) => {
    console.log(`${stdout}`);
    console.log(`${stderr}`);
    if (error !== null) {
        console.log(`exec error: ${error}`);
    }
});


child_process.exec(`node ${__dirname}/generateBaseConfig.js`, (error, stdout, stderr) => {
    console.log(`${stdout}`);
    console.log(`${stderr}`);
    if (error !== null) {
        console.log(`exec error: ${error}`);
    }
});


child_process.exec(`node ${__dirname}/generateRunDataFromTemplate.js`, (error, stdout, stderr) => {
    console.log(`${stdout}`);
    console.log(`${stderr}`);
    if (error !== null) {
        console.log(`exec error: ${error}`);
    }
});