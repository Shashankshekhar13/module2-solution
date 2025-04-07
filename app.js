(function () {
    'use strict';
  
    angular
      .module('ShoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;
  
      toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  
      toBuy.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
      };
    }
  
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var bought = this;
  
      bought.items = ShoppingListCheckOffService.getBoughtItems();
    }
  
    function ShoppingListCheckOffService() {
      var service = this;
  
      var toBuyItems = [
        { name: 'cookies', quantity: 10 },
        { name: 'chips',   quantity: 5 },
        { name: 'soda',    quantity: 3 },
        { name: 'apples',  quantity: 4 },
        { name: 'bananas', quantity: 6 }
      ];
  
      var boughtItems = [];
  
      service.getToBuyItems = function () {
        return toBuyItems;
      };
  
      service.getBoughtItems = function () {
        return boughtItems;
      };
  
      service.buyItem = function (itemIndex) {
        var item = toBuyItems.splice(itemIndex, 1)[0];
        boughtItems.push(item);
      };
    }
  })();
  