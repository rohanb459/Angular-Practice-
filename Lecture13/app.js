(function()
{
    angular.module("myApp", [])
    .controller("myController", myController)

    myController.$inject = ["$scope"];

    function myController($scope)
    {
        $scope.onceCounter = 0;
        $scope.counter = 0;
        $scope.dummyCounter = 0;
        $scope.showNumberOfWatchers = function()
        {
            console.log("number of watchers: ", $scope.$$watchersCount);
        }

        $scope.countOnce = function()
        {
            $scope.onceCounter = 1;
        }

        $scope.upCounter=function()
        {
            $scope.counter++;
        }

        $scope.$watch(function(){
            console.log("Digest Loop Fired!");
        })

        // $scope.$watch('onceCounter', function(newValue, oldValue){
        //     console.log("old Value: ", oldValue);
        //     console.log("new value: ", newValue);
        // })

        // $scope.$watch('counter', function(newValue, oldValue){
        //     console.log("Counter old Value: ", oldValue);
        //     console.log("Counter new value: ", newValue);
        // })
    }
})();