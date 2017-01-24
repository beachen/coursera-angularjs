(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  /** Directive definition object. **/
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function FoundItemsDirectiveController() {
    var list = this;

}



  // Inject Scope
  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];


  /**
  * Controller
  *
  **/
  function NarrowItDownController($scope, MenuSearchService) {

      var ctrl = this;
      var searchStr = "";
      ctrl.found = null;


      /** Search for menu items. **/
      ctrl.search = function (searchTerm) {
          console.log("Searching for:" + searchTerm);
          MenuSearchService.getMatchedMenuItems(searchTerm).
          then(function (res) {

              ctrl.found = res;
              console.log("Found:" + res.length);
          });
      };
      /** Remove one item from the items list**/
      ctrl.removeItem = function (index) {
          console.log("Remove!" + index);
          // Remove the item
          ctrl.found.splice(index, 1);
      };
      ctrl.nothingFound = function () {
          return ctrl.found != null && ctrl.found.length === 0;
      }
  };

  MenuSearchService.$inject = ['$http'];
  /**
  * Service
  *
  */
  function MenuSearchService($http) {
    var service = this;


    /** Call external service and filter by search term. **/
    service.getMatchedMenuItems = function (searchTerm) {
      var foundItems = [];
      console.log("About to call service to load data:" + searchTerm);
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"})
        .then(function (result) {
          // Process
          result.data.menu_items.forEach(function(e) {
            if(e.description.includes(searchTerm)){
                console.log(e);
                foundItems.push(e);
            }
            });
          console.log("Returning number of foundItems" + foundItems.length);
          return foundItems;
      });
    }
  };

})();
