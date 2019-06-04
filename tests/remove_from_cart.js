const expect = require('chai').expect;
const InventoryPage = require('../pages/inventory.page');
const inventoryPage = new InventoryPage();

describe('Removing items from cart', function() {

    it("removes one item", function() {
      inventoryPage.open();
      inventoryPage.addItem(); 
      inventoryPage.addItem(); 
      inventoryPage.removeItem();
      expect(inventoryPage.numberOfItemsInCart()).to.equal("1");
    });
});