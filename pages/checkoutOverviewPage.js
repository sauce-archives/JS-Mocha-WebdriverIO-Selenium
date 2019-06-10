const Page = require('./page');

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
        return parseInt($(".shopping_cart_badge").getText());
    } 
    finishCheckout(){
        $(".cart_button").click();
    }  
};

module.exports = CheckoutOverviewPage;