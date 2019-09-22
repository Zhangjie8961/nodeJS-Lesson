// 1.实现如下所示编码任务:。
// 
// ①创建encodeBuffer.js文件
// ②从命令行获取用户名(username)、 密码参数(password),先
// 输出到控制台。
// ③使用buffer的base64编码,将用户名、密码加密并输出到控制
// 台。



var userName = process.argv[2];
var password = process.argv[3];

console.log("用户名："+userName+" 密码："+password);

if(userName != undefined && password != undefined){
    var loginStr = userName + ":"+password;
    var buf1 = Buffer.from(loginStr,"utf-8");
    var base64tr = buf1.toString("base64");
    console.log(base64tr);
}else{
    console.log("用户名和密码不能为空");
}