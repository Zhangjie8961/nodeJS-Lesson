/**
 * get请求可以被其他人获取到，不安全
 * post方式提交表单
 */

const http = require("http");
const url = require("url");
const fs = require("fs");
const querystring = require("querystring");
const path = require('path');

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var filePath = path.join(__dirname,urlObj.pathname);
    var indexName = path.extname(filePath).toLowerCase();
    if(filePath == '/list'){
        console.log(1);
        console.log(urlObj);
        console.log(filePath);
        var fileContent = fs.readFileSync("chapterList.html");
        // fs.readFile(indexNath,(data)=>{
        //     if(indexName === '.js'){
        //         console.log("this is js")
        //         res.writeHead(200,{'Content-Type':'text/javascript'});
        //     }else if(indexName === '.css'){
        //         console.log("thos is css");
        //         res.writeHead(200,{'Content-Type':'text/css'});
        //     }
        //     else if(indexName === '.png'){
        //         res.writeHead(200,{'Content-Type':'image/png'});
        //     }else if(indexName === '.jpg'||indexName==='.jpeg'){
        //         res.writeHead(200,{'Content-Type':'image/jpg'});
        //     }
        // })
        res.writeHead(200,{"Content-Type":"text/html"});
        
        res.end(fileContent);
    }else if(urlObj.pathname == '/login'){
        var fileContent = fs.readFileSync("login.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fileContent);
    }else if(urlObj.pathname == '/listmanager'){
        var fileContent = fs.readFileSync("list.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fileContent);
    }else if(urlObj.pathname == '/addChapter'){
        var fileContent = fs.readFileSync("addChapter.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fileContent);
    }else if(urlObj.pathname =='/pf'){
        // res.end('hello pf');
        // console.log(urlObj.pathname);
        //post提交的信息只能这样获取，不能像get一样通过urlObj.pathname 获取
        var dataStr ='';
        req.on("data",function(chunk){
            dataStr += chunk;
        })
        req.on("end",function(){
            var dataObj = querystring.parse(dataStr);
            console.log(dataObj);
            res.end("username:"+dataObj.username+"pwd:"+dataObj.pwd);
        })
    }
    
    // res.end(console.log(1));


}).listen(8083);

console.log("server is listening 8083")