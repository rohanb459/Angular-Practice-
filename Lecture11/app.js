(function(){
    angular.module("myApp", [])
    .controller("myController", myController)

    myController.$inject = ["$scope"];

    function myController($scope)
    {
        $scope.picNumber = "1";
        $scope.changePicture=function()
        {
            if($scope.picNumber==="1")$scope.picNumber="2";
            else $scope.picNumber="1";
        }
    }
})();