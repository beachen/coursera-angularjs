(function () {
    'use strict';
    angular.module('public')
    .controller('SignupController', SignupController);

    function SignupController() {
      var $ctrl = this;
      $ctrl.user = {};
      $ctrl.msg = null;
      console.log("Singup controller");
        $ctrl.signUp = function () {

            console.log("Hello:" + $ctrl.user.firstName);
            if($ctrl.user.favorite != null){
                // Well, let's check if it is available
                $ctrl.msg = 'Your data has been saved ' + $ctrl.user.firstName;
            }
            else{
              $ctrl.msg = 'No valid favorite menu number. Data is NOT saved';
            }
        };
        $ctrl.showMsg = function () {

          return $ctrl.msg != null;
        };
    }
})();
