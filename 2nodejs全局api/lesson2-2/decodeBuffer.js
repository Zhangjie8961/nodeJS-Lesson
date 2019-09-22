// 2.实现如下所示编码任务:+
// ①创建decodeBuffer.js文件。
// ②现有base64编码的字符串
// var base64Str = emhhbmdzYW46MTIzNDU2.
// ③将base64编码的字符串转化为utf8编码的字符串，并将还原后
// 的字符串打印到控制台上。


var base64Str = "emhhbmdzYW46MTIzNDU2";
var buf1 = Buffer.from(base64Str,"base64");
var str = buf1.toString("utf-8");
console.log(str);