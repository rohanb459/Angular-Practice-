(function(){
    'use strict';

    angular.module('ShoppingListDirectiveApp', [])
        .controller("ShoppingListController", shoppingListController)
        .factory("ShoppingListFactory", ShoppingListFactory)
        .directive('shoppingList', ShoppingListDirective);

        function ShoppingListDirective(){
            var ddo = {
                templateUrl: 'shoppingList.html',
                scope:{
                    items: '<',
                    title: '@'
                },
                controller: ShoppingListDirectiveController,
                controllerAs: 'list',
                bindToController: true
            }
            return ddo;
        }

        shoppingListController.$inject = ["ShoppingListFactory"];
        function shoppingListController(ShoppingListFactory) {
            var list = this;
    
            var shoppingList = ShoppingListFactory();
            list.items = shoppingList.getItems();
            var origTitle = "Shopping List #1";
            list.title = origTitle + "(" + list.items.length + "items )";
            list.itemName = "";
            list.itemQuantity="";
    
            list.addItem = function(){
                shoppingList.addItem(list.itemName, list.itemQuantity);
                list.title = origTitle + "(" + list.items.length + "items )";
    
            }
    
            list.removeItem = function(itemIndex){
                shoppingList.removeItem(itemIndex);
                list.title = origTitle + "(" + list.items.length + "items )";
    
            }

            list.getItems= function()
            {
                return list.items;
            }
    
        }

        function ShoppingListDirectiveController(){
            var list = this;

            list.cookiesInList = function(){
                for(var i=0; i<list.items.length; i++)
                {
                    var name = list.items[i].name;
                    if(name.toLowerCase().indexOf("cookie")!==-1){
                        return true;
                    }
                }
                return false;
            };
        }

        function ShoppingListService(maxItems) {
            var service = this;
            var items = [];
    
            service.addItem = function (itemName, itemQuantity) {
                if (maxItems === undefined || (maxItems !== undefined) && (items.length < maxItems)) {
                    var item = {
                        name: itemName,
                        quantity: itemQuantity
                    };
                    items.push(item);
                }
                else {
                    throw new Error("Max items (" + maxItems + ")reached.")
                }
            }
    
            service.removeItem = function (itemIndex) {
                items.splice(itemIndex, 1);
            }
    
            service.getItems = function () {
                return items;
            }
        }
    
        function ShoppingListFactory() {
            var factory = function (maxItems) {
                return new ShoppingListService(maxItems);
            }
            return factory;
        }
})()