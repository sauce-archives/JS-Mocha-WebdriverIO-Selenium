var expect = require('chai').expect;
var homePage = new (require('../pages/home.page'));

describe('Mocha Spec Sync example', function() {

    it("follows link to new page", function() {
        browser.url('https://saucelabs.github.io/training-test-page');
        browser.element("a[id='i am a link']").click();
        expect(browser.getTitle()).to.equal('I am another page title - Sauce Labs');
    });
});