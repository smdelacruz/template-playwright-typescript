# Notes
### Install
#### Check playwright version 
``` bash
npx @playwright/test --version
```
#### Initialize new node project
``` bash
npm init -y
```
#### Install playwright test framework
``` bash
npm install @playwright/test
```

#### Install browser binaries
``` bash
npx install playwright
```

### Files
`playwright.config.ts` - Configs such as browser settings and environments

`package.json` - dependencies versions. Also Scripts. 
``` bash
"scripts": { 
    "test:e2e": "npx playwright test tests/"
    },
```
For example instead of typing `npx playwright test tests/ ` we can add a script to be 
`npm run test:e2e`


### Execute the test
``` bash
npx playwright test
```

### Notes
test.only if added, will run only this test