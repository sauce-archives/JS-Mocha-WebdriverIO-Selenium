const Page = require('./page');

class InventoryPage extends Page {

    constructor() {
        super();
    }
    
    open() {
       super.open("inventory.html");
    }

    addItem() {
        $(".btn_primary").click();
    }

    removeItem() {
        $(".btn_secondary").click();
    }

    numberOfItemsInCart() {
        return $(".shopping_cart_badge").getText();
    }
    
};

module.exports = InventoryPage;