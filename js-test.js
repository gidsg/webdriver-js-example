var expect = require('chai').expect;
// Use webdriverjs to create a Selenium Client
var client = require('./client').client;

 
describe('Open page', function(){
    before(function(done) {
        client.init().url('http://m.gucode.co.uk/sport/2012/oct/10/icc-suspends-umpires-corruption-claims', done);
        client.addCommand('hasText', function(selector, text, callback) {
this.getText(selector, function(result) {
    expect(result.value).to.have.string(text);
    callback();
});
});
done();}



describe('Check homepage', function(){
         it('should see the body', function(done) {
       /*     client.getText('p', function(title, error){
                expect(title).to.have.string(
                    'for illustrative examples in documents.'
                );
                done();*/


            })
        });
}
 
    after(function(done) {
        client.end();
        done();
        });
});

