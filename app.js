(function(){
  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFristController', function($scope){
    $scope.name="kumapro";
    $scope.sayHello = function(){
      return "Hello coursera!";
    }
  });

  angular.module('NameCalculatorApp', [])

  .controller('NameCalculatorController', function($scope){
    $scope.name="";
    $scope.totalValue=0;

    $scope.displayNumeric = function(){
      var totalNameValue=calculateNumericForString($scope.name);
      $scope.totalValue = totalNameValue;
    };

    function calculateNumericForString(string){
      var totalStringValue=0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    }

  });
})();
