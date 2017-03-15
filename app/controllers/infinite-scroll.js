angular.module("myApp",["infinite-scroll"])
	.controller("myCon",["$scope","Demo",function($scope,Demo){
		$scope.demo = new Demo();
	}])
	.factory('Demo',function($http){
  		var Demo = function () {
   		this.items = [];
    	this.busy = false;
    	this.after = '';
    	this.page = 1;
  	};
  	Demo.prototype.nextPage = function () {
    	if (this.busy) return;
   	 	this.busy = true;
    	var url = "data/eat_bottom"+this.page+".json";
    	$http.get(url).success(function (data) {
      var items = data.RspData.ArticleList.List;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i]);
      }
      this.busy = false;
      this.page += 1;
    }.bind(this));
  };
  return Demo;
})