(function () {
    'use strict';
    angular.module('public')
    .controller('SignupController', SignupController);

    function SignupController() {
      var $ctrl = this;
      $ctrl.user = {};
      $ctrl.msg = null;
      

        $ctrl.signUp = function () {

            if($ctrl.user.favorite){
                // Well, let's check if it is available
                $ctrl.saved = true;
                $ctrl.isItemAvailable = true;
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
    }
})();
