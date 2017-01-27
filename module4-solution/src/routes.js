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
      templateUrl: 'src/tabs/categoriesTab.html'
    })

    .state('items', {
      url: '/items/{categoryName}',
      templateUrl: 'src/tabs/itemsTab.html'
    });
}

})();
