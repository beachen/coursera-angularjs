(function () {
'use strict';
angular.module('data')
.controller('ItemsComponentController', ItemsComponentController);

ItemsComponentController.$inject = ['MenuDataService', '$stateParams'];
function ItemsComponentController(MenuDataService, $stateParams) {
  var ctrl = this;

  MenuDataService.getItemsForCategory($stateParams.categoryName)
  .then(function (res) {
    console.log("Here is some item data!");
    console.log(res);
    ctrl.items = res;
  });
}

})();
