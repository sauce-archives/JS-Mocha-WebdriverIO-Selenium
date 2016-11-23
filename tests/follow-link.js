var expect = require('chai').expect;
var HomePage = require('../pages/home.page');

describe('Mocha Spec Sync example', function() {

    it("follows link to new page", function() {
        HomePage.open();
        HomePage.follow_link();
        expect(HomePage.title()).to.equal('I am another page title - Sauce Labs');
    });
});