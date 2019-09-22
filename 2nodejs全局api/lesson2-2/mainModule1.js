
// 6.实现如下所示编码任务: 。
// ①创建 circleModule.js mainModule.js 文件
// ②在circleModule.js中对外公布一个对象，该对象结构如下所示
// { circumference : circumference, area: area }。Circumference
// 和area是两个函数，分别用来计算圆的周长和面积。心
// ③
// 在mainModule.js中引入circleModule.js模块，调用圆的两
// 个方法
// ④
// 对比该实例与⑤中实例实现的区别



var circleModule=require("./circleModule.js");
var r=process.argv[2];
console.log("圆的半径:"+r);
console.log("圆的周长:"+circleModule.circumference(r));
console.log("圆的面积:"+circleModule.area(r));


//⑤中实验是将构造函数公开，通过调用构造函数中的方法计算出周长和面积
//⑥是将对象公开,通过调用定义在对象上面的函数计算周长和面积