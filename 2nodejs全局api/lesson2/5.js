// 5.实现如下所示编码任务:
// ψ
// ①在控制台输出，当前Node.js进程运行所在的操作系统平台。和
// ②在控制台输出，当前Node.js进程的PID (进程id)。 p
// ③在控制台输出，当前Node.js执行程序的文件路径。
// ④在控制台输出， Node.js进程的当前工作目录。“
// ⑤在控制台输出， Chrome V8内存的使用情况。+



console.log(process.pid);
console.log(process.platform);
console.log(process.argv);
console.log(process.cwd);
console.log(process.memoryUsage);