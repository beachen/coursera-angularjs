(function () {
'use strict';
angular.module('data')
.controller('CategoriesComponentController', CategoriesComponentController);

CategoriesComponentController.$inject = ['MenuDataService'];
function CategoriesComponentController(MenuDataService) {
  var $ctrl = this;
  $ctrl.categories = [];

  // 1. Get all categories
  console.log("Get all categories");
  MenuDataService.getAllCategories()
  .then(function (res) {
      console.log("My data:" + res.data.length);
      $ctrl.categories = res.data;
      console.log("My Categories:" + $ctrl.categories);

  });
}

})();
