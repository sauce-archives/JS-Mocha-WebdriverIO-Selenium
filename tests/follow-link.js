var assert = require('assert');
var HomePage = require('../pages/home.page');

describe('Mocha Spec Sync example', function() {

    it("follows link to new page", function() {
        HomePage.open();
        HomePage.follow_link();
		assert.equal(HomePage.title(), 'I am another page title - Sauce Labs');
    });
});