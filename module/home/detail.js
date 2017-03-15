/* 
* @Author: anchen
* @Date:   2017-02-27 19:53:43
* @Last Modified by:   anchen
* @Last Modified time: 2017-02-28 20:07:02
*/

angular.module("myApp", ["ui.router"])
.controller("HomeController", ["$scope", "$http", function($scope, $http){
    $http.get("../../data/detail.json").success(handle).error(function(){
        alert("网络异常！")
    });
    function handle(res){
        $scope.detaildata= res;
        console.log(res);
    }
}])