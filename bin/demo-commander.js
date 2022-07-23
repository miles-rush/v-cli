const { program } = require('commander');
program.version('0.0.1');
// 指定命令行参数
program.option("-n ", "输出名称")
program.option("-type --type <type>", "项目类型")


const options = program.opts();

console.log("opts=>", options);

program
    .command("create <app-name>")
    .description("创建一个标准的Vue项目")
    .action(name => {
        console.log('正在创建Vue项目,名称为:' + name)
    })


// 解析命令行参数
program.parse(process.argv)