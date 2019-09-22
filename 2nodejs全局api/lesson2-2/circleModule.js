// 5.实现如下所示编码任务: 。
// ①创建circleModule.js mainModule.js 文件
// +,
// ②在circleModule.js中对外公布个函数circleFun,该函数有
// 一个参数r表示传入的一个圈的半径，函数中定义两个方法，
// circumference (计算圆的周长)、area (计算圆的面积)。circleFun
// wwwwwwwwwwwwwwwww.
// 返回一个对象，对象结构
// { circumference : circumference, area: area }4
// ③在mainModule.js中引入circleModule.js模块，调用圆的两
// 个方法



function circleFun(r){
    function circumference(){
       return 2*Math.PI*r;
    }
    function area(){
        return Math.PI*r*r;
    }
    return{circumference:circumference,area:area};
}

module.exports={
    circleFun:circleFun
}

