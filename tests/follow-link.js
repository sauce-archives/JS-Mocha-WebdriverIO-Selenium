const expect = require('chai').expect;
const homePage = new (require('../pages/home.page'));

describe('Mocha Spec Sync example', function() {

    it("follows link to new page", function() {
        homePage.open();
        homePage.follow_link();
        expect(homePage.title).to.equal('I am another page title - Sauce Labs');
    });
});