//
// Service responsible for fetching data from external resource.
//
//
(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

// Inject the http package
MenuDataService.$inject = ['$http'];

/**
  * Service
  *
  */
  function MenuDataService($http) {
    var service = this;


    /** Call external service and filter by search term. **/
    service.getAllCategories = function () {
      var allCategories = [];
      console.log("getAllCategories via http");
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"})
    };

    /** Get all items for a specific category.  **/
    service.getItemsForCategory = function (categoryShortName) {
      var items = [];
      console.log("getItemsForCategory via http");
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName})
        .then(function (result) {
          // Process
          items = result.data.menu_items;
          console.log("Received items:" + result.data.menu_items.length);
          return items;
      });
    }
  };

})();
