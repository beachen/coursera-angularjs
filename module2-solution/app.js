(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // Inject Scope
  ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];


  /**
  * ToBuyController
  *
  **/
  function ToBuyController($scope, ShoppingListCheckOffService) {
      var toBuy = this;

      toBuy.toBuyList = ShoppingListCheckOffService.getToBuy();

      toBuy.remove = function (index) {
        console.log("Remove item:" + index);
        ShoppingListCheckOffService.removeItemFromList(index);
      }
      toBuy.isEverythingBought = function () {
          return toBuy.toBuyList.length == 0;
      }

  };

   AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  /**
  * AlreadyBoughtController
  *
  **/
  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
     var bought = this;
     bought.list = ShoppingListCheckOffService.getAlreadyBought();

     bought.isEmpty = function () {
         return bought.list.length == 0;
     }
  };

  function ShoppingListCheckOffService() {

    var service = this;
    var toBuyItems = [
      { name:"Milk", qty: 1},
      { name:"Bananas", qty: 4},
      { name:"Apples", qty: 2},
      { name:"Tomatoes", qty: 10}


    ];
    var alreadyBought = [];

    service.removeItemFromList = function (index) {
       var removedItem = toBuyItems[index];
       toBuyItems.splice(index, 1);
       alreadyBought.push(removedItem);
    }


    /** Get all the items to buy. **/
    service.getToBuy = function () {

       return toBuyItems;
    }
    /** Get all the items already bought **/
    service.getAlreadyBought = function () {

       return alreadyBought;
    }

  };

})();
