const { program } = require('commander');
const inquirer = require('inquirer');
program.version('0.0.1');
// 指定命令行参数
program.option("-n ", "输出名称")
program.option("-type --type <type>", "项目类型")

inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: "你的名字叫什么?"
    },
    {
        name: "age",
        type: "checkbox",
        message: "你多大了?",
        choices: ["20-25", "25-30", "30-40", "40以上"]
    },
    {
        name: "salary",
        type: "list",
        message: "你的薪资多少?",
        choices: ["10k-20k", "20k-30k", "30k-40k"]
    }
]).then(answer => {
    console.log("回答内容:", answer);
})

// 解析命令行参数
program.parse(process.argv)