# Playwright based automation sdk
Playwright base automation SDK for testing.
Currently, support api testing only. Include html and console report


# Getting starting
- add `playwright-automation-sdk` dependency to your `package.json` file
- execute `yarn` to install a new dependency
- execute `node ./node_modules/.bin/init-test-data` to bring necessary files for test run
- add next script to your package.json:
  `- "test": "playwright test",`
  ` - "report:html": "playwright show-report"`
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



