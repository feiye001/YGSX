/* 
* @Author: anchen
* @Date:   2017-02-28 09:57:31
* @Last Modified by:   anchen
* @Last Modified time: 2017-02-28 19:28:44
*/

angular.module("myApp", [])
.controller("freshController", ["$scope", "$http", function($scope, $http){
    $http.get("../../data/fresh.json").success(fresh).error(function(){
        alert("网络异常！")
    });
    $scope.calnum = function(val, flag){
        return flag? Math.floor(val) : Math.round((val%1).toFixed(2)*100);
    }
    function fresh(res){
        $scope.freshdata= res;
        console.log(res);
    }
}])