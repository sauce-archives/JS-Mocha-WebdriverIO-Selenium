const expect = require('chai').expect;
const LoginPage = require('../pages/login.page');
const loginPage = new LoginPage();

describe('Problem user', function() {

    it("cannot login successfully", function() {
        loginPage.open();
        loginPage.loginAs("problem_user", "wrong_password");
        expect(loginPage.isErrorVisible());
    });
});