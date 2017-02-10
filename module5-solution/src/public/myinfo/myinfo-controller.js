(function () {
    'use strict';
    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ["RestaurantService"];

    function MyInfoController(RestaurantService) {
      var $ctrl = this;
      console.log("MyInfoController");

      console.log(RestaurantService.getData());

      $ctrl.getData = function () {
          var data =  RestaurantService.getData();
          console.log(data);
          return data;
      };
    }
})();
