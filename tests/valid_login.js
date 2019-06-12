const expect = require('chai').expect;
const LoginPage = require('../pages/login.page');
const loginPage = new LoginPage();
const ProductsPage = require('../pages/productsPage');
const productsPage = new ProductsPage();

describe('Standard user', function() {

    it("can login successfully", function() {
        loginPage.open();
        loginPage.loginAs("standard_user", "secret_sauce");
        expect(productsPage.isLoaded());
    });
});