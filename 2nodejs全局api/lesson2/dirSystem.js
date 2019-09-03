/**全局api，直接调用即可 
 * 获取路径要获取相对路径，即dirname
*/
// console.log(__dirname);
// console.log(__filename);

//引入http原生模块
const http = require("http");
const fs = require("fs");
//创建一个服务器
//server 所代表的函数，在客户端发起的http请求响应后才会进行调用，即浏览器刷新后，终端才会出网页代码
var server = http.createServer(function(req,res){
//  
    // res.end("接收到客户端请求");


    //process.platform 返回字符串，表示node。js运行的操作系统平台
    var sys = process.platform;
    var htmlPath = '';
    console.log(sys);
    switch(sys){
        case"linux":
            htmlPath = __dirname+"/view/view.html";
            break;
        case"win32":
            htmlPath = __dirname+"\\view\\view.html";
            break;
        default:
            console.log("unknown system");
            break;
    }


    // var htmlPath = __dirname+"\\view\\view.html";
    //这一句可以用上面的case分流可替代

    
    var htmlContent = fs.readFileSync(htmlPath);
    // //将二进制地址转化为字符串
    htmlContent = htmlContent.toString("utf8");
    console.log(htmlContent);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
});
//服务监听一个窗口
server.listen(8081);
console.log("server is listening 8081");