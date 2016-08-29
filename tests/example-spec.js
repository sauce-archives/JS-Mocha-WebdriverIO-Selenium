var assert = require('assert');

describe('Mocha Spec Sync example', function() {

    it("should get guinea pig page 1", function() {
		browser.url('/test/guinea-pig');
		var title = browser.getTitle();
		assert.equal(title, 'I am a page title - Sauce Labs');
		
    });
});