/* 
* @Author: anchen
* @Date:   2017-02-27 14:35:28
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-05 15:25:44
*/

module.exports = function(grunt){
    //任务配置
    grunt.initConfig({
        //读取package.json信息
        pkg :grunt.file.readJSON("package.json"),
        // watch: {
        //     build: {
        //         files: ['app/*.js'],
        //         tasks: ['uglify'],
        //         options: { spawn: true }
        //     }
        // },
        //配置uglify相关内容   npm install grunt-contrib-uglify --save-dev
        uglify:{
                my_target: {
                    options:{
                    banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd")%>*/\n',
                    footer : "\n/*最后修改人：<%=pkg.author%>*/",
                    mangle : true,
                    preserveComments : "all"
                },
                files: {
                    "app/default.js" : "app/*.js"
                }
            }  
        },
        cssmin:{
            options:{
                keepSpecialComments:0
            },
            compress:{
                files:{
                    'css/com.css':[
                        'css/common.css'
                    ]
                }
            }
        }
    });
    //载入uglify 任务
    grunt.loadNpmTasks("grunt-contrib-uglify");
    //载入watch 任务
    // grunt.loadNpmTasks("grunt-contrib-watch");
    //载入cssmin任务
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    //注册任务 (也就是在终端输入 grunt 后要执行的任务)
    grunt.registerTask("default",["uglify", "cssmin"]);
}