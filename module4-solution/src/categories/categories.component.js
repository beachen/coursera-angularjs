//
// CategoriesComponent:
// Usage in  HTML: <categories></categories>
//
(function () {
'use strict'
angular.module('data')
.component('categories', {
  templateUrl: 'src/categories/categories.template.html',
  controller: CategoriesComponentController,
  bindings: {
    categories: '<'
  }

});
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
