const expect = require('chai').expect;
const HomePage = require('../pages/home.page');
const homePage = new HomePage();

describe('Mocha Spec Sync example', function() {

    it("Submit Comment", function() {
        homePage.open();
        let comment = "This is a comment";

        homePage.setComment(comment);
        homePage.submit();

        let output = homePage.getComment();
        expect(output).to.equals(comment);
    });
});
