// 7.实现如下所示编码任务:。
// ②
// 创建processStd.js文件4
// ②
// 接收用户输入信息，Name, Email, QQ, Mobile。。
// 输入完成后输出输出一个对象，包含上述的对象属性及输入属性值。



var obj = {};
var message = ["Name","Email","QQ","Mobile"];
var i = 1;
console.log(message[0]+":");
process.stdin.on("data",function(data){
    obj[message[i-1]] = data.toString("utf8");
    if(i ==4){
        console.log(obj);
        process.exit();
    }else{
        console.log(message[i++] + ":");
    }
})