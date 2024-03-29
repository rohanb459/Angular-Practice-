(function () {
    'use strict';

    var shoppingList1 = ["Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate Flavor)", "Peopta Bismol (Cookie Flavor)"];

    var shoppingList2 = [
        {
            name: "Milk",
            quantity: "2"
        }, 
        {
            name: "Donuts",
            quantity: "200"
        },
        {
            name: "Chocolates",
            quantity: "5"
        },
        {
            name: "Cookies",
            quantity: "300"
        },
    ];

    angular.module("shoppingListApp", [])
    .controller("shoppingListController", shoppingListController);

    shoppingListController.$inject = ["$scope"];

    function shoppingListController($scope)
    {
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;

        $scope.addToList = function(){
            var newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            }
            $scope.shoppingList2.push(newItem);
        }
    
       
    }

    
})()