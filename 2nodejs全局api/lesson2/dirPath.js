/**全局api，直接调用即可 
 * 获取路径要获取相对路径，即dirname
*/
// console.log(__dirname);
// console.log(__filename);

//引入http原生模块
const http = require("http");
const fs = require("fs");
const path = require("path");
//创建一个服务器
//server 所代表的函数，在客户端发起的http请求响应后才会进行调用，即浏览器刷新后，终端才会出网页代码
var server = http.createServer(function(req,res){
//  
    // res.end("接收到客户端请求");
    

    //通过path.join系统自动判断操作系统，运用恰当分隔符拼接路径地址使其可用
    var htmlPath = path.join(__dirname,'/view/view.html');



    var htmlContent = fs.readFileSync(htmlPath);
    //将二进制地址转化为字符串
    htmlContent = htmlContent.toString("utf8");
    console.log(htmlContent);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
});
//服务监听一个窗口
server.listen(8081);
console.log("server is listening 8081");