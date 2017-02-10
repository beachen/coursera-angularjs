//
// This service is a singleton
//
(function () {
    'use strict';
    angular.module('public')
    .service('RestaurantService', RestaurantService);

    // Inject the http package
    RestaurantService.$inject = ['$http'];
    // https://beachen-restaurant.herokuapp.com/menu_items.json
    //
    function RestaurantService($http) {
      var service = this;
      var savedData = null;

      service.saveData = function (user, item) {
          savedData = user;
          savedData.description = item.description
          savedData.title = item.name;
          savedData.category = item.category_short_name;

      };
      service.getData = function () {

          //console.log("Get data:" + savedData);
          return savedData;
      };
      service.getShortName = function (shortName) {
          return $http.get(
            'https://beachen-restaurant.herokuapp.com/menu_items/' + shortName + '.json');
      };
    }

})();
