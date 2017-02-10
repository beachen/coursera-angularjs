//
// This service is a singleton
//
(function () {
    'use strict';
    angular.module('public')
    .service('RestaurantService', RestaurantService);

    // Inject the http package
    RestaurantService.$inject = ['$http'];

    function RestaurantService($http) {
      var service = this;
      var savedData = null;

      service.saveData = function (dataToSave) {
          savedData = dataToSave;
      };
      service.getData = function () {

          console.log("Get data:" + savedData);
          return savedData;
      };
    }

})();
