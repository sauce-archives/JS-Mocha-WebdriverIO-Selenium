var expect = require('chai').expect;
var HomePage = require('../pages/home.page');

describe('Mocha Spec Sync example', function() {

    it("Submit Comment", function() {
        HomePage.open();
        var comment = "This is a comment";

        HomePage.setComment(comment);
        HomePage.submit();

        var output = HomePage.getComment();
        expect(output).to.equals(comment);
    });
});
