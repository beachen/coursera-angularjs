(function () {
    'use strict';
    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ["RestaurantService"];

    function SignupController(RestaurantService) {
      var $ctrl = this;
      $ctrl.user = {};
      $ctrl.msg = null;


        $ctrl.signUp = function () {

            if($ctrl.user.favorite){
                // Well, let's check if it is available
                $ctrl.saved = true;
                $ctrl.isItemAvailable = true;
                RestaurantService.saveData($ctrl.user);
            }
            else{
              $ctrl.isItemAvailable = false;
              $ctrl.saved = false;
            }
        };
        $ctrl.displayNoValidItem = function () {
            return $ctrl.isItemAvailable != true;
        };

        $ctrl.isSaved = function () {
          return $ctrl.saved;
        };
        $ctrl.getData = function () {
          return RestaurantService.getData();
        };
    }
})();
