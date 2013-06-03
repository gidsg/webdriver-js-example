# Webdriver-JS example project
_An example project using Webdriver JS and Phantom JS for functional browser testing_
*	Download Selenium [standalone server JAR](https://code.google.com/p/selenium/downloads/list)
*	Run the server `java -jar selenium-server-standalone-2.33.0.jar`
*	Clone this repo
*	`npm install`

## To use mocha

The mocha tests are in the `js-runner.js` file.
Run	`mocha js-runner.js -t 10000` to execute the tests

##To use cucumber.js

The cucumber tests live in the `features` directory.
Run `./node_modules/cucumber/bin/cucumber.js` to see them work.
