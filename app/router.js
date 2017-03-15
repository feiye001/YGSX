/* 
* @Author: anchen
* @Date:   2017-02-25 21:31:03
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-06 11:16:38
*/
setTimeout(function(){
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,//可选选项，自动滑动
        pagination : '.swiper-pagination'
    });
},1000);
app
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("home");
    $stateProvider.state("home", {
        url:"/home",
        templateUrl:"module/home/home.html",
        controller:"HomeController"
    })
    .state("detail", {
        url:"/detail",
        templateUrl:"module/home/detail.html",
        controller:"detailController"
        }
    )
    .state("fresh", {
        url:"/fresh",
        templateUrl:"module/home/fresh.html",
        controller:"freshController"
    })
    .state("city", {
        url:"/city",
        templateUrl:"module/city/city.html",
        controller:"cityController"
    })
    .state("type", {
        url:"/type",
        templateUrl:"module/type/type.html",
        controller:"HomeController"
    })
    .state("cart", {
        url:"/cart",
        templateUrl:"module/cart/cart.html",
        controller:"cartController"
    })
    .state("mine", {
        url:"/mine",
        templateUrl:"module/mine/mine.html",
        controller:"HomeController"
    })
    .state("mineLogoIn",{
        url:"/mineLogoIn",
        templateUrl:"module/mine/build/mineLogoIn.html",
        controller : "mineController"
    })
    .state("indent",{
        url:"/indent",
        templateUrl:"module/mine/build/indent.html",
    })
    .state("favorable",{
        url:"/favorable",
        templateUrl:"module/mine/build/favorable.html",
        controller : "mineController"
    })
    .state("address",{
        url:"/address",
        templateUrl:"module/mine/build/address.html",
        controller : "mineController"
    })
    .state("service",{
        url:"/service",
        templateUrl:"module/mine/build/service.html",
        controller : "mineController"
    })
    .state("shezhi",{
        url:"/shezhi",
        templateUrl:"module/mine/build/shezhi.html",
        controller : "mineController"
    })
    .state("picking",{
        url:"/picking",
        templateUrl:"module/mine/build/picking.html",
        controller : "mineController"
    })
    .state("eat", {
        url:"/eat",
        templateUrl:"module/eat/eat.html",
        controller:"EatController"
    })
    .state("eat.eat_tiaozhuan",{
        url:"/eat_tiaozhuan",
        templateUrl:"module/eat/eat_tiaozhuan.html"
        // controller:"eat_tiaozhuanController"
    })
    .state("type_sec",{
        url : "/type_sec",
        templateUrl : "module/type/type_sec/type_sec.html",
        controller : "typeController"
    })
    // .state("city",{
    //     url : "/city",
    //     templateUrl : "module/city/city.html",
    //     controller : "HomeController"
    // })
})