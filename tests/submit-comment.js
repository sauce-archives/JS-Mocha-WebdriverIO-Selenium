var expect = require('chai').expect;
var homePage = new (require('../pages/home.page'));

xdescribe('Mocha Spec Sync example', function() {

    it("Submit Comment", function() {
        homePage.open();
        var comment = "This is a comment";

        homePage.setComment(comment);
        homePage.submit();

        var output = homePage.getComment();
        expect(output).to.equals(comment);
    });
});
