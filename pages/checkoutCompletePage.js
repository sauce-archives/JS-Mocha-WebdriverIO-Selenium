const Page = require('./page');

class CheckoutCompletePage extends Page {

    constructor() {
        super();
    }

    isLoaded(){
        return browser.$(".pony_express").isDisplayed();
    }
};

module.exports = CheckoutCompletePage;