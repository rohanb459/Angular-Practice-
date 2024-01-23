(function(){
    angular.module('msgApp', [])
    .controller('msgController', msgController);

    msgController.$inject = ["$scope"];
    function msgController($scope)
    {
        $scope.name = "Rohan"
    }
})()