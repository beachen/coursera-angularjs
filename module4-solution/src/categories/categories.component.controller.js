(function () {
'use strict';
angular.module('data')
.controller('CategoriesComponentController', CategoriesComponentController);

CategoriesComponentController.$inject = ['items'];
function CategoriesComponentController(items) {
  console.log("Categories component controller:" + items.length);
  var mainList = this;
  mainList.items = items;
}
})();
