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



function circumference(r){
    return 2*Math.PI*r;
}

function area(r){
    return Math.PI*r*r;
}

module.exports={
    circumference:circumference,
    area:area
}