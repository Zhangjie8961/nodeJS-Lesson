/**全局api，直接调用即可 
 * 获取路径要获取相对路径，即dirname
*/
// console.log(__dirname);
// console.log(__filename);

//引入http原生模块
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
//创建一个服务器
//server 所代表的函数，在客户端发起的http请求响应后才会进行调用，即浏览器刷新后，终端才会出网页代码
var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var urlPathname = urlObj.pathname
    
    
    console.log("<")
    console.log(urlObj);
    console.log(urlObj.pathname);
    console.log(">")

    // console.log("<")
    // console.log(req.url);
    // console.log(">")

    if(urlPathname =='/favicon.ico'){
        res.end();
    }else if(urlPathname =='/'){

        // res.end("接收到客户端请求");
        var htmlPath = __dirname+"\\view\\view.html";
        var htmlContent = fs.readFileSync(htmlPath);
        //将二进制地址转化为字符串
        htmlContent = htmlContent.toString("utf8");
        console.log(htmlContent);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(htmlContent);
        res.end();
    }
    else if(urlPathname =='/js/index.js'){
        var jsPath = path.join(__dirname+'/js/index.js');
        var jsContent = fs.readFileSync(jsPath);
        // console.log(jsContent);
        jsContent = jsContent.toString("utf8");

        res.writeHead(200,{"Content-Type":"text/javascript"});
        res.write(jsContent);
        res.end();
    }
});
//服务监听一个窗口
server.listen(8081);
console.log("server is listening 8081");