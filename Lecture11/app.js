(function(){
    angular.module("myApp", [])
    .controller("myController", myController)
    .filter("loves", lovesFilter)

    myController.$inject = ["$scope", "lovesFilter"];

    function myController($scope, lovesFilter)
    {
        $scope.picNumber = "1";
        $scope.cost = .50
        $scope.changePicture=function()
        {
            if($scope.picNumber==="1")$scope.picNumber="2";
            else $scope.picNumber="1";
        }

        $scope.sayMessage = function ()
        {
            var msg = "Rohan likes to go to gym!"
            return msg;
        }

        $scope.sayLovesMessage = function ()
        {
            var msg = "Rohan likes to go to gym!"
            msg=lovesFilter(msg); 
            return msg;
        }
    }

    function lovesFilter()
    {
        return function (input)
        {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        }
    }
})();