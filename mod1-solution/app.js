(function(){
  'use strict';
  angular.module('LunchCheckerApp', [])
  .controller('LunchCheckerController', function($scope){
    $scope.lunchMenu="";
    $scope.msg="";
    $scope.comments="";
    $scope.comment="Please enter data first";
      $scope.getComment= function(){
      if($scope.msg){
          $scope.comments=$scope.msg;
      }else {
        $scope.comments=$scope.comment;
      }
    }

    $scope.splitMenue = function(){
      $scope.msg=deriveComment($scope.lunchMenu);
    }

    function deriveComment(string){
      var menues=string.split(',');
      if (menues.length > 3) {
        return "Too much!";
      }else{
        return "Enjoy!";
      }
    }
  });

})();
