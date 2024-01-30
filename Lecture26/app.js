(function(){
    'use strict';

    angular.module('ControllerAsApp',[])
    .controller("ShoppingListController1", ShoppingListController1)
    .controller("ShoppingListController2", ShoppingListController2)
    .service("ShoppingListService", ShoppingListService);

    ShoppingListController1.$inject = ["ShoppingListService"];
    function ShoppingListController1(){
        var list1 = this;

    }


    function ShoppingListService()
    {
        var service = this;
        var items = [];

        service.addItem=function(itemName, itemQuantity)
        {
            if(maxItems === undefined || (maxItems !== undefined)&&(items.length<maxItems))
            {
                var item = {
                    name: itemName,
                    quantity: itemQuantity
                };
                items.push(item);
            }
            else{
                throw new Error("Max items (" + maxItems + ")reached.")
            }
        }

        service.removeItem = function(itemIndex)
        {
            items.splice(itemIndex, 1);
        }

        service.getItems = function()
        {
            return items;
        }
    }
})()