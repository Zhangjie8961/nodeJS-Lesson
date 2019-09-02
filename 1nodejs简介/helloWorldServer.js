const http = require("http");

var server = http.createServer(function(req,res){
    server.write("hello,world");
    server.end();
});


server.listen(8083);
console.log("hello world");