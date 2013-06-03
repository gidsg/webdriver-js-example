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

## Known Issues

### Unknown option: webdriver

```
19:45:23.383 INFO - Executing: [new session: {platform=ANY, javascriptEnabled=true, browserName=phantomjs, version=}] at URL: /session)
19:45:23.384 INFO - Creating a new session for Capabilities[{platform=ANY, javascriptEnabled=true, browserName=phantomjs,version=}]
19:45:23.386 INFO - executable: /usr/local/bin/phantomjs
19:45:23.386 INFO - port: 47076
19:45:23.386 INFO - arguments: [--webdriver=47076,--webdriver-logfile=/Users/mchadburn/Projects/phantomjsdriver.log]
19:45:23.386 INFO - environment: {}
Error: Unknown option: webdriver
```

####Solution
This happens when you have phantomjs installed by an external installer and it's not up to date. Make sure you use a recent version of phantomjs
