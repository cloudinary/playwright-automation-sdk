# Playwright based automation sdk
Playwright base automation SDK for testing.
Currently, support api testing only. Include html and console report


# Getting starting
- create folder to locate your new automation tests project ( mkdir/ or finder)
- navigate to the project folder in the terminal and run 'yan' command - new dev project will be created 
- open the project in your IDE
- add `playwright-automation-sdk` dependency to your `package.json` file with the latest version number for example :
 
"name": "my_package",
"version": "1.0.0",
"dependencies": {
  "playwright-automation-sdk": "^0.0.5",
  "another_dep": "~2.2.0"
}
In terminal:
- execute `yarn` to install a new dependency
- execute `node ./node_modules/.bin/init-test-data` to bring necessary files for test run
In your IDE:
- add next script to your package.json:
  `- "test": "playwright test",`
  ` - "report:html": "playwright show-report"`
In Terminal:
- execute `yarn test`

# Project structure:
- './src/scripts/' - contains scripts to init new projects( creates sample test, basic config, and a template for test run data)
- './src/reporter/' - ConsoleReport.ts is a console log implementation for Report.ts api, that can be implemented with other reporters
- './src/interfaces/' - get/post/put... request interfaces
- './src/utils/'
    - RequestUtils - implements requests for test usage
    - AccountUtil - provisioning API for cloud management in tests
    - TestRunDataUtil - manage required test account data for testing
- './src/Helper' - general helper functions for tests such as 'randomString'


## Add next files to gitignore:
```
/.idea/
node_modules/
test-results/
playwright-report/
/playwright/.cache/
.env
/TestRunData.json
```



