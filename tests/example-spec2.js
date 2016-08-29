var assert = require('assert');

describe('Mocha Spec Sync example', function() {

    it("focusable textbox value should clear", function() {
		browser.url('https://saucelabs.com/test/guinea-pig');
		browser.clearElement('#i_am_a_textbox')		
		assert.equal('', browser.getText('#i_am_a_textbox'))
		browser.setValue('#i_am_a_textbox', 'A new value')
		browser.submitForm('#submit');
		assert.equal('', browser.getText('#i_am_a_textbox'))		
    });
});