(function () {
'use strict';
angular.module('data')
.controller('CategoriesComponentController', CategoriesComponentController);

CategoriesComponentController.$inject = ['items'];
function CategoriesComponentController(items) {
  
  var categories = this;
  categories.items = items;
}
})();
