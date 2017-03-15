/* 
* @Author: anchen
* @Date:   2017-02-13 11:04:31
* @Last Modified by:   anchen
* @Last Modified time: 2017-02-26 13:56:15
*/

(function(window){
        //取得当前浏览器窗口宽度
        var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
        //屏幕宽度超出500时，将根节点fontsize设置为15px
        //将根节点fontsize设置为宽度的32分之一
        document.documentElement.style.fontSize = winWidth/12.42+'px';
        
        //当页面大小发生改变的时候 重新修正rem为新窗口尺寸的十分之一
        window.onresize = function(){
            //取得当前浏览器窗口宽度
            var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
            //将根节点fontsize设置为宽度的32分之一
            document.documentElement.style.fontSize = winWidth/12.42+'px';
        }
    })(window);