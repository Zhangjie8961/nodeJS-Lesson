// 6.实现如下所示编码任务:。
// R
// ①创建 processArg.js文件
// 4
// ②该程序可以传入一个命令行参数，参数为一个数学运算式，
// 例如1+1。↓
// ③应用程序接收传 入运算式，并运算得到运算结果，在控制台进行输出，
// 输出格式例如: 1 + 1 =2。
// φ
// ④未定义该传入参数或传 入参数为-h,则程序提示帮助信息(自定义)。


var arg1=process.argv[2];
if(arg1=="e"){
    process.exit();
}
else if(arg1=="k"){
    process.kill(process.pid);
}
else{
    setTimeout(function(){
        console.log("延时结束");
    },5000)
}


var i =0;
process.stdin.on("data",function(data){
    i++;
    if(i==4){
        process.exit();

    }else{

    }
})