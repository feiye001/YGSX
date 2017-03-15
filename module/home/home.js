/* 
* @Author: anchen
* @Date:   2017-02-26 17:24:27
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-03 09:42:16
*/

angular.module("myApp")
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("home");
    $stateProvider.state("home", {
        url:"/home",
        templateUrl:"home.html",
        controller:"HomeController" 
    })
    .state("detail", {
        url:"/detail",
        templateUrl:"detail.html",
        controller:"detailController"
    })
    .state("fresh", {
        url:"/fresh",
        templateUrl:"fresh.html",
        controller:"freshController"
    })
})
.controller("HomeController", ["$scope", "$http", "homeservice", "$state", "$rootScope",function($scope, $http, homeservice, $state, $rootScope){
        homeservice.getData().success(handle).error(function(){
            alert("网络异常！");
        });
         function handle(res){
            $scope.data = res;
        }
         $scope.getinfo =function(obj){
            $rootScope.dedata = obj;
        }
}])
.controller("freshController", ["$scope", "$http", "freshservice", "$anchorScroll", "$location", "$rootScope", function($scope ,$http, freshservice, $anchorScroll, $location, $rootScope){
    freshservice.getData().success(fresh).error(function(){
        alert("网络异常！")
    });
    $scope.calnum = function(val, flag){
        return flag? Math.floor(val) : Math.round((val%1).toFixed(2)*100);
    }
    
    $scope.abc = function(name){
        $location.hash(name);//设置当前锚点值
        $anchorScroll();//跳转至锚点

    }
    $scope.getinfo =function(obj){
            $rootScope.dedata = obj;
        }
    function fresh(res){
        $scope.freshdata= res;
    }
}])
.controller("detailController", ["$scope", "$http", "detailservice", function($scope ,$http, detailservice){
    detailservice.getData().success(detailhandle).error(function(){
        alert("网络异常！")
    });

    function detailhandle(res){
        $scope.detaildata= res;
    }
}])
