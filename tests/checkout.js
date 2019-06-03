const expect = require('chai').expect;
const CheckoutOverviewPage = require('../pages/checkoutOverviewPage.js');
const checkoutOverviewPage = new CheckoutOverviewPage();

describe('Checkout items', function() {
    //
    // 
    /**
     *In this scenario, we are going to perform an atomic e2e scenario. 
     But the question is how can we set the appropriate application state without
     actually going through all of the screens that will allow us to set the state?

     Using JavaScript, we can control the state of our application and remove
     all of the unecessary UI interactions.

     PS. We can also manipulate the state of the app using API, DB, and cookies
     */
    it("should be able to checkout the cart", function() {      
        checkoutOverviewPage.open();
        //This is a mechanism to set the state of our application without doing any UI interactions
        checkoutOverviewPage.injectCartContents();
        expect(checkoutOverviewPage.getItemCount()).to.be.above(0);

        //This is the point where we actually use the UI to validate that a user
        // can checkout
        let checkoutCompletePage = checkoutOverviewPage.finishCheckout();
        expect(checkoutCompletePage.isLoaded()).to.be.true;
    });
});