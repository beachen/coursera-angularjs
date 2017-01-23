(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

  // Inject Scope
  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];


  /**
  * Controller
  *
  **/
  function NarrowItDownController($scope, MenuSearchService) {
      var ctrl = this;

      var searchStr = "";

      ctrl.search = function (searchTerm) {
          console.log("Searching for:" + searchTerm);
          ctrl.items =  MenuSearchService.getMatchedMenuItems(searchTerm);
          console.log(ctrl.items);
      }


  };
  /**
  * Service
  *
  */
  function MenuSearchService() {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
    // https://davids-restaurant.herokuapp.com/menu_items.json
        console.log("searchTerm:" + searchTerm);
        return {name:"item1"};
    }


  };

})();
