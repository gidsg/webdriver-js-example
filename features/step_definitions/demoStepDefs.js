var stepDefs = function () {
    this.World = require("../support/world.js").World;

    this.When(/^I open an article$/, function (callback) {
        this.visit("http://m.gucode.co.uk/sport/2012/oct/10/icc-suspends-umpires-corruption-claims", callback);
    });

    this.Then(/^I should see an option to read more on the story$/, function (callback) {
        var selector = 'aside h3';
        this.browser.hasText(selector, 'More on this story', callback)
    });

}

module.exports = stepDefs;
