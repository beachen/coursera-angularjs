//
// CategoriesComponent:
// Usage in  HTML: <categories></categories>
//
(function () {
'use strict';
angular.module('data')
.component('categories', {
  templateUrl: 'src/categories/categories.template.html',
  controller: 'CategoriesComponentController',
  bindings: {
    categories: '<'
  }

});
})();
