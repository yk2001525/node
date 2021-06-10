var http = require('http')
var url = require('url')
var path = require('path')
var readStaticFile = require('./modules/readStaticFile');

//搭建http服务器
var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url)
    var urlPathname = urlObj.pathname
    var filePathname = path.join(__dirname,"/public",urlPathname)
    console.log(filePathname)
    readStaticFile(res,filePathname);



})
server.listen(3000,function(){
    console.log('静态资源服务器运行中')
    console.log("正在监听3000端口")
})