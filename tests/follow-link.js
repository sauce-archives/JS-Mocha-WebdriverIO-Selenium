const expect = require('chai').expect;
const HomePage = require('../pages/home.page');
const homePage = new HomePage();

describe('Mocha Spec Sync example', function() {

    it("follows link to new page", function() {
        homePage.open();
        homePage.follow_link();
        expect(homePage.title).to.equal('I am another page title - Sauce Labs');
    });
});