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
            var fav = $ctrl.user.favorite;
            if(fav){

                RestaurantService.getShortName(fav)
                .then(function (res) {
                    // Success
                    $ctrl.saved = true;
                    $ctrl.isItemAvailable = true;
                    RestaurantService.saveData($ctrl.user, res.data);
                }, function () {
                   // Error
                   $ctrl.isItemAvailable = false;
                   $ctrl.saved = false;
                })

            }
        };
        $ctrl.displayNoValidItem = function () {
            return $ctrl.isItemAvailable == false;
        };

        $ctrl.isSaved = function () {
          return $ctrl.saved;
        };
        $ctrl.getData = function () {
          return RestaurantService.getData();
        };
    }
})();
