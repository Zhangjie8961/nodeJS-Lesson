// 3.实现如下所示编码任务: 。
// ①I创建bufferlmgjs文件
// ②
// 创建服务，监听8081端口，当从浏览器端发起请求时，
// localhost:8081/ , 服务器端响应html代码到浏览器。
// ③服务端响应的html代码中包含张图片，该图片数据为data
// Uri数据，即buffer的base64编码的图片数据。8


const http  = require("http");
const fs = require("fs");
const path = require("path");


http.createServer(function(req,res){
    var imgPath = path.join(__dirname+"/1.jpg");
    var imgBuffer = fs.readFileSync(imgPath)
    var Base64Data = imgBuffer.toString("base64");
    // console.log(Base64Data);
    var imgSrc = "data:image/jpg;base64"+Base64Data;
    var htmlSrc = "<!DOCTYPE html><head></head>"+"<body><img src='" + imgSrc + "' /></body></html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlSrc);
    res.end();
}).listen(8080);

console.log("sercer is listening 8080");