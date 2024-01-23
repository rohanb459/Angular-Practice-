(function(){
    'use strict';
    var x="hello"
    angular.module('myFirstApp', [])

    .controller('MyFirstController', function($scope){
        $scope.name = "Rohan";

        $scope.sayHello = function()
        {
            return "Hello There!";
        }
    });
})();