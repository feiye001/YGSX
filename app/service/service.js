/* 
* @Author: anchen
* @Date:   2017-03-02 11:08:08
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-06 11:03:07
*/

app
.service("homeservice", function($http){
    this.getData = function(){
        return  $http.get("data/home.json");
    }
})
.service("freshservice", function($http){
    this.getData = function(){
        return  $http.get("data/fresh.json");
    }
})
.service("detailservice", function($http){
    this.getData = function(obj){
        return $http.get("data/detail.json");
    }
})
// .service("cartService",["$rootScope",function($rootScope){
//     $rootScope.ITEMS = [];
//     $rootScope.bonus = 0.00;
//     this.setData = function(ele){
//         var arr= [],bonus=0;
//         if(ele !== undefined){
//             $rootScope.ITEMS.map(function(val){
//                 arr.push(val.SpecId);
//             });
//             if(arr.indexOf(ele.SpecId)==-1){
//                 ele['num'] = 1;
//                 $rootScope.ITEMS.push(ele); 
//             }else{
//                 ele['num'] ++;
//             }
//         }
//         $rootScope.ITEMS.map(function(val){
//             bonus+=(val.CommodityPrice || val.commodityPrice) * val.num;
//             // console.log(val.commodityPrice+ " "+ val.num +"  "+ bonus)
//         });
//         $rootScope['bonus']= bonus;
//     return  $rootScope.ITEMS;   
//     }
//     this.delData = function(ele){
//         $rootScope.ITEMS.splice($rootScope.ITEMS.indexOf(ele),1);
//     }
// }])
.service("cartService",["$rootScope",function($rootScope){
    $rootScope.ITEMS = [];
    $rootScope.bonus = 0.00;
    $rootScope.sumNum = 0;
    this.setData = function(ele){
        var arr= [],bonus=0,sumNum=0;
        if(ele !== undefined){
            $rootScope.ITEMS.map(function(val){
                arr.push(val.SpecId);
            });
            if(arr.indexOf(ele.SpecId)==-1){
                ele['num'] = 1;
                $rootScope.ITEMS.push(ele); 
            }else{
                ele['num'] ++;
            }
        }
        $rootScope.ITEMS.map(function(val){
            sumNum+=val.num;
            bonus+=(val.CommodityPrice || val.commodityPrice) * val.num;
            // console.log(val.CommodityPrice+ " "+ val.num +"  "+ bonus)
        });
        $rootScope['sumNum']= sumNum;
        $rootScope['bonus']= bonus;
    return  $rootScope.ITEMS;   
    }
    this.delData = function(ele){
        $rootScope.ITEMS.splice($rootScope.ITEMS.indexOf(ele),1);
    }
}])
.service("TypeService",function($http){
    this.getData = function(){
        return $http.get("data/type.json");
    }
})
.service("TypeSecService",function($http){
    this.getData = function(){
        return $http.get("data/type_sec_impall.json")
    }
})
.service("cityService",function($http){
    this.getData = function(){
        return $http.get("data/city.json");
    }
})
