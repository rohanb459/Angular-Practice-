(function(){
    'use strict';

    angular.module("ShoppingListApp",[])
    .controller("ShoppingListController", ShoppingListController)
    .provider("ShoppingListService", ShoppingListServiceProvider)
    .config(Config);

    Config.$inject = ["ShoppingListServiceProvider"];
    function Config(ShoppingListServiceProvider){
        ShoppingListServiceProvider.defaults.maxItems=2;
    }

    ShoppingListController.$inject = ["ShoppingListService"];
    function ShoppingListController(ShoppingListService)
    {
        var list = this;
        list.items = ShoppingListService.getItems();

        list.itemName = "";
        list.itemQuantity = "";

        list.addItem = function(){
            try{
                ShoppingListService.addItem(list.itemName, list.itemQuantity);
            }
            catch(error)
            {
                list.errorMessage = error.message;
            }
        }
        list.removeItem = function(itemIndex)
        {
            list.items.splice(itemIndex, 1);
        }
    }

    function ShoppingListService(maxItems){
        var service = this;

        var items = [];

        service.addItem=function(itemName, itemQuantity){
            if((maxItems === undefined) || (maxItems!==undefined && items.length < maxItems))
            {
                var item = {
                    name: itemName,
                    quantity: itemQuantity
                };
                items.push(item);
            }
            else{
                throw new Error("Max items (" + maxItems + ") reached .")
            }
        }

        service.getItems = function(){
            return items;
        }
    }

    function ShoppingListServiceProvider(){
        var provider = this;

        provider.defaults = {
            maxItems: 10
        };

        provider.$get = function(){
            var shoppingList = new ShoppingListService(provider.defaults.maxItems);
            return shoppingList;
        }
    }
})();