(function () {
    'use strict';
    angular.module('public')
    .controller('SignupController', SignupController);

    function SignupController() {
      var $ctrl = this;
      $ctrl.user = {};

      console.log("Singup controller");
        $ctrl.signUp = function () {

            console.log("Hello:" + $ctrl.user.firstName);
            if($ctrl.user.favorite != null){
                // Well, let's check if it is available

            }
        }
    }
})();
