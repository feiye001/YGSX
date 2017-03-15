app
.controller("mineController",["$scope","$state",function($scope){
}])
.controller("HomeController", ["$scope", "$http", "homeservice", "$state", "$rootScope",function($scope, $http, homeservice, $state, $rootScope){
        homeservice.getData().success(handle).error(function(){
            // alert("网络异常！");
        });
         function handle(res){
            $scope.data = res;
        }
         $scope.getinfo =function(obj){
            $rootScope.dedata = obj;
        }
}])
.controller("freshController", ["$scope", "$http", "freshservice", "$anchorScroll", "$location", "$rootScope",function($scope ,$http, freshservice, $anchorScroll, $location, $rootScope){
    freshservice.getData().success(fresh).error(function(){
        // alert("网络异常！")
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
.controller("detailController", ["$scope", "$http", "detailservice", "cartService",function($scope ,$http, detailservice, cartService){
    detailservice.getData().success(detailhandle).error(function(){
        // alert("网络异常！")
    });

    function detailhandle(res){
        $scope.detaildata= res;
    }
    $scope.typeBuy = function(res){
        cartService.setData(res);  
    }
}])


//eat跳转
.controller("EatController",["$scope","$http","Demo",function($scope,$http,Demo){
    $http.get("./data/eat_top.json").success(function(data){
        // console.log(data.RspData.data.AdSwiperImage35);
        $scope._filter = "";
        $scope.Banners = data.RspData.data.AdSwiperImage35.Banners;
        $scope.Banners1 = data.RspData.data.AdCategory37.Banners;
        var mySwiper = new Swiper('.swiper-container',{
            loop: true,
            // direction: 'vertical',
            // autoplay: 2000,
            // 如果需要分页器
            pagination : '.swiper-pagination',
            paginationClickable: true,
            longSwipesRatio: 0.3,
            touchRatio:1,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            autoplay: 2000,
        });
        //筛选器
        $scope.type = function(z){
            // console.log(z);
            $scope._filter = z;
        }

        
    })
    // $http.get("./data/eat_bottom.json").success(function(data){
    //     // console.log(data.RspData.ArticleList.List);
    //     $scope.lists = data.RspData.ArticleList.List;
    // })

    $scope.visible = false;
    $scope.hide = function () {
    $scope.visible = !$scope.visible;
    }

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
        var url = "./data/eat_bottom"+this.page+".json";
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




//eat_tz跳转
.controller("eat_tiaozhuanController",["$scope","$http",function($scope,$http){
    $http.get("./data/eat_article.json").success(function(data){
            $scope.lists = data.RspData.CommodityList;
    })
}])
// .controller("cartController",["$scope","cartService","$rootScope",function($scope,cartService,$rootScope){
//     $scope.cartFlag1 = false;
//     $scope.cartFlag2 = true;
//     $scope.count = 1;
//     $scope.cartAdd = function(obj){
//         if($scope.count === 99){
//             return;
//         }
//         obj.num++;
//         cartService.setData();
//     }
//     $scope.cartCut = function(obj){
//         if(obj.num === 1){
//             return;
//         }
//        obj.num--;
//        cartService.setData();
//     }
//     $scope.cartDel = function(){
//         $scope.cartFlag3=true;
//     }
//     $scope.cancelDel = function(){
//         $scope.cartFlag3 = false;
//     }
//     $scope.sureDel = function(obj){
//         cartService.delData(obj);
//         cartService.setData();
//         $scope.cartFlag3 = false;
//     }
//     // if($rootScope.ITEMS.length!==0){
//     //         $scope.cartFlag1=true;
//     //         $scope.cartFlag2=false;
//     // }else{
        
//     // }
//     $scope.cartFlag1 = true;
//     $scope.cartFlag2 = false;
// }])
.controller("cartController",["$scope","cartService","$rootScope",function($scope,cartService,$rootScope){
    $scope.cartFlag1 = false;
    $scope.cartFlag2 = true;
    $scope.cartFlag3 = false;
    if($rootScope.ITEMS.length!==0){
            $scope.cartFlag1=true;
            $scope.cartFlag2=false;
    }
    $scope.cartAdd = function(obj){
        if(obj.num === 99){
            return;
        }
        obj.num++;
        cartService.setData();
    }
    $scope.cartCut = function(obj){
        if(obj.num === 1){
            return;
        }
       obj.num--;
       cartService.setData();
    }

    // if($scope.carItems.length!==0){
    //     $scope.cartFlag1=true;
    //     $scope.cartFlag2=false;
    // }
    $scope.cartDel = function(obj, flag){
        $scope.cartFlag3=true;
        var taritem = obj;
        if(!flag){$('.cart-clearTips').text('您确定要清空购物车？')};
        $scope.cancelDel = function(){
            $scope.cartFlag3 = false;
        }
        $scope.sureDel = function(taritem){
            if(flag){
                cartService.delData(taritem);
                cartService.setData();
                if($rootScope.ITEMS.length===0){
                    $scope.cartFlag1 = false;
                    $scope.cartFlag2 = true;
                }
            }else{
                $rootScope.ITEMS = [];
                $scope.cartFlag1 = false;
                $scope.cartFlag2 = true;
            }
            $scope.cartFlag3 = false;
        }
        
    }
    // $scope.cartClear = function(){
    //     $rootScope.ITEMS = [];
    //     $scope.cartFlag1 = false;
    //     $scope.cartFlag2 = true;
    // }
}])
.controller("typeController",["$scope","$state","TypeService",
    function($scope,$state,TypeService){
    $scope.flag=false;
    $scope.showDetial = function(){
        if(this.flag==false){
            this.flag=true;
        }else{
            this.flag=false;
        }
    };
     TypeService.getData().success(function(res){
        $scope.items=res;
    });
}])
.controller("typeSecController",["$scope","TypeSecService","cartService","$rootScope",function($scope,TypeSecService,cartService,$rootScope){
    $scope.a = false;
    $scope.orderKey = "";
    $scope.orderType = false;
    $scope.typeObj = document.getElementById("type-sec-def");
    $scope.change = function(e){
        //点击切换效果
        if($scope.typeObj!=null){
            $scope.typeObj.className = "";
        }
        e.target.setAttribute("class","type-activeA");
        $scope.typeObj = e.target;

        //获取目标私有属性typeVal作为排序条件
        $scope.orderKey = e.target.getAttribute("typeVal");
        if($scope.orderKey === ""){
            $scope.orderType = false;
        }else{
            $scope.orderType = !$scope.orderType;
        }
            
    }
    TypeSecService.getData().success(function(res){
        $scope.items=res;
    })
    $scope.typeBuy = function(res, ev){
        var offset = $(".carcar").offset(),
            obj = $(ev.target).siblings('a').find('.type-sec-pic');
        flyer = $('<img class="u-flyer" src="'+res.SmallPic+'" style="width:50px;heigt:50px">'); //抛物体对象
        flyer.fly({
            start: {
                left: obj.get(0).getBoundingClientRect().left+obj.width()/2,//抛物体起点横坐标
                top: obj.get(0).getBoundingClientRect().top//抛物体起点纵坐标
            },
            end: {
                left: offset.left +10,//抛物体终点横坐标
                top: offset.top + 10, //抛物体终点纵坐标
            },
            onEnd: function() {
                // $("#tip").show().animate({width: '200px'},300).fadeOut(500);////成功加入购物车动画效果
                this.destroy(); //销毁抛物体
            }
        });      
        cartService.setData(res);  
    }
}])
.controller("cityController",["$scope","cityService", "$rootScope",function($scope,cityService, $rootScope){
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
    $scope.getName = function(res){
        $rootScope.CName = res;
    $scope.carItems = $rootScope.ITEMS;
    if($scope.carItems.length!==0){
        $scope.cartFlag1=true;
        $scope.cartFlag2=false;
    }
}
}])