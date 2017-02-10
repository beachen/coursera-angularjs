(function () {
    'use strict';
    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ["RestaurantService"];

    function MyInfoController(RestaurantService) {
      var $ctrl = this;

      console.log("MyInfoController");

      $ctrl.data = RestaurantService.getData();
      $ctrl.data = {
        firstName:'Anders',
        lastName:'Strand',
        email:'anders.t.strand@gmail.com',
        phone:'555-555-5555',
        favorite:'A',
        title:'Title',
        description : 'Description'
      }
      // Inject data
      $ctrl.getData = function () {
          $ctrl.data =  RestaurantService.getData();
          console.log(data);
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
