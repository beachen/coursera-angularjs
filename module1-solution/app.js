(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
  // Inject Scope
  LunchCheckController.$inject = ['$scope'];

  /**
  * This is the controller
  *
  **/
  function LunchCheckController($scope) {
    $scope.msg = "";
    $scope.lunch = "";

    /*
    * Validate user input
    */
    $scope.validate = function () {

        var items = $scope.lunch.split(",");

        if($scope.lunch === ''){
          $scope.msg = "Please enter data first!";
        }
        else if(items.length <= 3){
              $scope.msg = "Enjoy your lunch!";
        }
        else{
            $scope.msg = "Too much!";
        }
    };
  }
})();
