const Page = require('./page');
const CheckoutCompletePage = require('../pages/checkoutCompletePage.js');
const checkoutCompletePage = new CheckoutCompletePage();

class CheckoutOverviewPage extends Page {

    constructor() {
        super();
    }
    
    open() {
       super.open("checkout-step-two.html");
    }
    injectUser(){
        browser.execute("window.sessionStorage.setItem('session-username', 'standard-user')");                
    }
    injectCartContents(){
        browser.execute("window.sessionStorage.setItem('cart-contents', '[4,1]')");
        browser.refresh();
    }
    getItemCount(){
        return parseInt(browser.$(".shopping_cart_badge").getText());
    } 
    finishCheckout(){
        browser.$(".cart_button").click();
        return checkoutCompletePage;
    }  
};

module.exports = CheckoutOverviewPage;