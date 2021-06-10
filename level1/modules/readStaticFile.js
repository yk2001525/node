var path = require('path')
var fs = require('fs')
var mime = require('mime')
var url = require('url')
function readStaticFile(res,filePathname){
       //解析后对象的 ext 属性中保存着目标文件的后缀名
       var ext = path.parse(filePathname).ext;
       // 获取后缀对应的 MIME 类型
       var mimeType = mime.getType(ext);
        console.log(ext)
        
       if(ext){
            fs.readFile(filePathname,(err,data)=>{
                if(err){
                    res.writeHead(404,{"Content-Type":"text/plain"});
                    res.write("404 - File is not found!")
                    res.end()
                }else{
                    res.writeHead(200,{"Content-Type":mimeType})
                    res.write(data)
                    res.end()
                }
            })
        return true

       }else{
           return false
       }
}


module.exports = readStaticFile