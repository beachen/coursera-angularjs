//
// MenuApp module
//
// Responsibility:
//  - Define the UI routes of the application
//  - Inject modules used in this application
//
//
(function () {
'use strict'

// The MenuApp has dependencies to the ui.router and data module
angular.module('MenuApp',['ui.router', 'data']);

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/tab1');

  // Set up UI states
  $stateProvider
    .state('tab1', {
      url: '/tab1',
      templateUrl: 'src/tab1.html'
    })

    .state('tab2', {
      url: '/tab2',
      templateUrl: 'src/tab2.html'
    });
}


})();
