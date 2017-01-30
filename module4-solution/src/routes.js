//
// Definition of the application routes
//
(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/tabs/homeTab.html'
  })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/tabs/categoriesTab.html',
      controller: 'CategoriesComponentController as mainList',
      // Inject categories before view is displayed
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          console.log("Lets get some data from service!");
          return MenuDataService.getAllCategories().then(function (res) {
              console.log("inject total items:" + res.data.length);
              return res.data;
          });
        }]
      }
    })

    .state('items', {
      url: '/items/{categoryName}',
      templateUrl: 'src/tabs/itemsTab.html'
    });
}

})();
