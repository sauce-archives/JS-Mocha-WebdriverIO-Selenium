const Page = require('./page');

class CheckoutCompletePage extends Page {

    constructor() {
        super();
    }

    isLoaded(){
        return $(".pony_express").isDisplayed();
    }
};

module.exports = CheckoutCompletePage;