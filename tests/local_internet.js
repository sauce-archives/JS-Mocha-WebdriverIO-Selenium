var expect = require('chai').expect;

describe('The Local Internet', function() {

    it("should visit the checkboxes page", function() {
        browser.url('checkboxes')

        expect(browser.isVisible('#checkboxes')).to.equal(false);
    });

});
