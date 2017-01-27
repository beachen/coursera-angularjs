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
ItemsComponentController.$inject = ['MenuDataService'];
function ItemsComponentController(MenuDataService) {
  var ctrl = this;

  console.log("ItemsComponentController starts here");
  MenuDataService.getItemsForCategory("L")
  .then(function (res) {
    console.log("Here is some item data!");
    console.log(res);
    ctrl.items = res;
  });
}
})();
