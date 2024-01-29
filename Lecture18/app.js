(function()
{
    'use strict';
    var shoppingList = ["Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate Flavor)", "Peopta Bismol (Cookie Flavor)"];

    angular.module("MyApp", [])
    .controller("MyController", MyController);

    MyController.$inject = ["$scope"];
    function MyController($scope)
    {
        $scope.shoppingList = shoppingList;
    }
})();