(function(){
    'use strict';

    angular.module("myApp", [])
    .controller("myController", myController)

    myController.$inject = ["$scope", "$timeout"];

    function myController($scope, $timeout)
    {
        $scope.counter=0;
        $scope.upCounter = function()
        {
            $timeout(function(){
                $scope.counter++;
                console.log("Counter Incremented!")
            }, 2000);

            // setTimeout(function(){
            //     $scope.$apply(function(){
            //         $scope.counter++;
            //         console.log("counter Incremented!");
            //     });

            // }, 2000);

            // setTimeout(function()
            // {
            //     $scope.counter++;
            //     console.log("Counter Incremented!")
            //     $scope.$digest();
            // }, 2000);            
        };
    }
})()