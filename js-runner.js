var expect = require('chai').expect;
var webdriverjs = require("webdriverjs");
var client = webdriverjs.remote({
    desiredCapabilities: {
        // You may choose other browsers
        // http://code.google.com/p/selenium/wiki/DesiredCapabilities
        browserName: 'phantomjs'
    },
    // webdriverjs has a lot of output which is generally useless
    // However, if anything goes wrong, remove this to see more details
    //logLevel: 'silent'
});

client.logLevel = "verbose";

describe('Run Selenium tests', function () {

    before(function (done) {
        // Add some helper commands
        client.addCommand('hasText', function (selector, text, callback) {
            this.getText(selector, function (error, result) {
                expect(result).to.have.string(text);
                callback();
            });
        });

        client.addCommand('waitUntilVisible', function (element, callback) {
            var self = this;

            function checkElement() {
                self.isVisible(element, function (error, result) {
                    if (result === true) {
                        callback();
                    } else {
                        setTimeout(checkElement, 500);
                    }
                });
            }

            checkElement();
        });
        done();
    });

    beforeEach(function (done) {
        // Navigate to the URL for each test
        client.init();
        client.url('http://m.gucode.co.uk/sport/2012/oct/10/icc-suspends-umpires-corruption-claims', done);
    });

    it('should be able to navigate betwen the pages', function (done) {
        this.timeout(10000);

        client.waitUntilVisible('aside h3', function () {
            this.hasText('aside h3', 'More on this story', function () {
                done()
            })
        })


    });

    afterEach(function (done) {
        client.end();
        done();
    });

});
