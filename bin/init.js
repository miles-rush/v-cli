/**
 * 项目克隆
 */
import { promisify } from 'util';
import ora from 'ora';
import shell from "shelljs";
import download_git_repo from "download-git-repo";
import chalk from 'chalk';

const download = promisify(download_git_repo);
// 日志打印函数
const log = (content) => {
    console.log(chalk.yellow(content));
}

export async function init(appName) {
    log(`🍀创建项目 ${appName}`);
    const spinner = ora("下载中...").start();
    // 删除文件夹
    shell.rm("-rf", appName);
    try {
        await download('direct:https://github.com/miles-rush/manager-fe.git',
            appName,
            { clone: true });
        spinner.succeed("下载完成");
        log(`
下载完成，请执行下面命令启动项目:
==========================
cd ${appName}
npm init 
npm run dev / yarn dev
`)
    } catch (error) {
        log(`下载失败`, error);
        spinner.stop();
    }
}




