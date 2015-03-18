module.exports=function(grunt){
    var transport=require("grunt-cmd-transport");
    var style=transport.style.init(grunt);
    var text = transport.text.init(grunt);
    var script=transport.script.init(grunt);
    grunt.initConfig({
        pkg:grunt.file.readJSON("public/javascripts/caregg/package.json"),
        prefix:"<%= pkg.family %>/<%= pkg.name %>/<%= pkg.version %>/",
        //清空临时目录
        clean:{
            main:["public/javascripts/caregg/src/.tmp*"]
        },
        //seajs模块的transport化,即生成family/name/version格式的ID和依赖项
        transport:{
            js:{
                options:{
                    idleading:"<%= prefix %>",
                    paths:["public/javascripts/sea-modules"],
                    alias:"<%= pkg.spm.alias %>"
                },
                files:[
                    {
                        expand:true,
                        cwd:"public/javascripts/caregg/src",
                        src:"**/*.js",
                        dest:"public/javascripts/caregg/src/.tmp1"
                    }
                ]
            },
            // parsing tpl into js
            tpl: {
                options:{
                    idleading:"<%= prefix %>",
                    paths:["public/javascripts/sea-modules"],
                    alias:"<%= pkg.spm.alias %>"
                },
                files: [{
                    expand: true,
                    cwd: 'public/javascripts/caregg/src',
                    src: '**/*.tpl',
                    dest: 'public/javascripts/caregg/src/.tmp1'
                }]
            }
        },
        //合并文件
        concat:{
            js:{
                options:{
                    include:"relative",
                    css2js:style.css2js
                },
                files:
                    [
                        {
                            expand:true,
                            cwd:"public/javascripts/caregg/src/.tmp1",
                            src:"**/*.{js,css}",
                            filter:function(filepath){
                                return !/-debug.*\.js$/.test(filepath);
                            },
                            dest:"public/javascripts/caregg/src/.tmp2"
                        }
                    ]
            }
        },
        //精简文件,删除注释,空格,换行符等
        uglify:{
            js:{
                options:{
                    mangle:false
                },
                files:[
                    {
                        expand:true,
                        cwd:"public/javascripts/caregg/src/.tmp2",
                        src:"**/*.js",
                        dest:"public/javascripts/sea-modules/<%= prefix %>"

                    }
                ]
            }
        },
        //压缩打包文件
        compress:{
            main:{
                options:{
                    archive:"web.tar"
                },
                files:[
                    {
                        expand:true,
                        src:["public/**","!public/javascripts/caregg/**"],//需要打包的文件
                        dest:""

                    },
                    {
                        expand: true,
                        cwd: 'pages/',//将pages里面的文件提到根目录
                        src: ['**'],
                        dest: ''
                    }
                ]
            }
        },
        //secure copy部署项目文件到远程服务器
        scp:{
            test:{
                options:{
                    host:"192.168.1.243",
                    username:"apptest01",
                    password:"caregg2015",
                    port:22
                },
                files:[
                    {
                        cwd:"",
                        src:"web.tar",
                        dest:"/var/www/caregg-o2o-web/"
                    }
                ]
            }
        },
        //远程执行linux命令
        sshexec:{
            "test-deploy":{
                command:["cd /var/www/caregg-o2o-web/ && tar -xvf web.tar;rm -rf static/temp"],
                options:{
                    config:"test"
                }
            }
        },
        sshconfig:{
            test:{
                host:"192.168.1.243",
                username:"apptest01",
                password:"caregg2015",
                port:22
            }
        }
    })

    grunt.loadNpmTasks("grunt-cmd-transport");
    grunt.loadNpmTasks("grunt-cmd-concat");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-compress");
    grunt.loadNpmTasks("grunt-scp");
    grunt.loadNpmTasks("grunt-ssh");
    //grunt.registerTask("test",["clean","transport","concat","uglify","clean","compress","scp:test","sshexec:test-deploy"]);
    grunt.registerTask("test",["clean","transport","concat","uglify","clean","compress"]);
//    grunt.registerTask("test",["clean","transport","concat","uglify"]);
}