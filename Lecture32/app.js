(function () {
    'use strict';

    angular.module('MenuCategoriesApp', [])
        .controller('MenuCategoriesController', MenuCategoriesController)
        .service('MenuCategoriesService', MenuCategoriesService)
        .constant("ApiBasePath", "https://dummy.restapiexample.com/api/v1/")


        MenuCategoriesController.$inject = ["MenuCategoriesService"];
        function MenuCategoriesController(MenuCategoriesService){
            var menu = this;

            var promise = MenuCategoriesService.getMenuCategories();

            promise.then(function(response){
                menu.categories = response.data;
            })
            .catch(function(error){
                console.log("Something went terribly Wrong!");
            });

            menu.logMenuItems = function(shortName){
                var promise = MenuCategoriesService.getMenuForCategory(shortName);

                promise.then(function(response){
                    console.log(response.data);
                })
                .catch(function(error){
                    console.log(error);
                })
            }

        }


        MenuCategoriesService.$inject = ["$http", "ApiBasePath"];
        function MenuCategoriesService($http, ApiBasePath)
        {
            var service = this;
            service.getMenuCategories = function(){
                var response = $http({
                    method: "GET",
                    url: (ApiBasePath + "employees")
                });

                return response;
            }

            service.getMenuForCategory=function(shortName){
                var response = $http({
                    method: "GET",
                    url: (ApiBasePath+"employee/"+shortName)
                })
                return response;
            }
        };


})() 