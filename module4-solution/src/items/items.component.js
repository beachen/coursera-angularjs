//
// ItemsComponent
//
(function () {
'use strict'
angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/items/items.template.html',
  controller : ItemsComponentController,
  bindings :{
    items: '<'
  }

});
ItemsComponentController.$inject = ['MenuDataService', '$stateParams'];
function ItemsComponentController(MenuDataService, $stateParams) {
  var ctrl = this;

  console.log("ItemsComponentController starts here");
  MenuDataService.getItemsForCategory($stateParams.categoryName)
  .then(function (res) {
    console.log("Here is some item data!");
    console.log(res);
    ctrl.items = res;
  });
}

})();
