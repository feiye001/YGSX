angular.module("myApp")
.service("cityService",function($http){
    this.getData = function(){
        return $http.get("../../data/city.json");
    }
})