(function () {
    'use strict';
    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ["RestaurantService"];

    function MyInfoController(RestaurantService) {
      var $ctrl = this;

      $ctrl.data = RestaurantService.getData();

      // Inject data
      $ctrl.getData = function () {
          $ctrl.data =  RestaurantService.getData();
          return data;
      };
      $ctrl.isSignedUp = function () {
        if($ctrl.data){
          return true;
        }
        else{
            return false;
        }
      };

    }

})();
