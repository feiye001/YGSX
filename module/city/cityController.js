angular.module("myApp",[])
.controller("cityController",["$scope","cityService",function($scope,cityService){
	cityService.getData().success(function(cityName){
		$scope.hotCity=cityName;
		var obj = {};
		var citys = cityName.RspData.data.CityList,cl = citys.length;
		for(var i=0;i<cl;i++){
			var city = citys[i];
			if(!obj[city.PY]){
				obj[city.PY] = [];
			};
			obj[city.PY].push(city)
		}
		$scope.citys = obj;
	})
}])