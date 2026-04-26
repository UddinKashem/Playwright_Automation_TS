Playwright Test is an end-to-end test framework for modern web apps.
To open last HTML report run:
-----------------------------
npx playwright show-report	

*** Various execution commands:  
---------------------------------
npx playwright test (runs all tests on all browsers in headless mode)

npx playwright test --workers 3 (runs tests with 3 workers in parallel)

npx playwright test one.spec.js  (run a specific test file)

npx playwright test one.speec.js two.spec.js  (runs the files specified)

npx playwright test one two (runs files that have one or two in the file name)

npx playwright -g "check title" (runs test with the title)

npx playwright test --project=chromium (runs test on specific browser)

npx playwright test --headed (runs tests in headed mode)

npx playwright test --debug (debug specific test file)

npx playwright test example.spec.js:21 --debug (debug starting from specific line where test (.. starts)

npx playwright test --project=chromium --headed

npx playwright show-trace .\test-results\record_test2-test-record-2-chromium-retry1\trace.zip
