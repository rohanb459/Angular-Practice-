(function(){
    angular.module("BindingApp", [])
    .controller("BindingController", BindingController)

    BindingController.$inject = ["$scope"];

    function BindingController($scope){
        $scope.firstName = "Rohan";
        // $scope.fullName = "arey!";

        $scope.showNumberOfWatchers = function()
        {
            console.log("Log # of watchers", $scope.$$watchersCount);
        }

        $scope.setFullName = function()
        {
            $scope.fullName = $scope.firstName + " " + "Bhatia";

        }

        $scope.logFirstName = function()
        {
            console.log("First Name is: ", $scope.firstName);
        }

        $scope.logFullName = function()
        {
            console.log("Full Name is: ", $scope.fullName);
        }
    }
})()