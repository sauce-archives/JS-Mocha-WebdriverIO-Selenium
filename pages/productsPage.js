const Page = require('./page');

class ProductsPage extends Page {

    constructor() {
        super();
    }
    
    open() {
       super.open("");
    }
    isLoaded(){
        return $('#header_container').isDisplayed();
    }  
};

module.exports = ProductsPage;