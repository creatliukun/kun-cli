#!/usr/bin/env node
// `#!/usr/bin/env node` （固定第一行）必加，主要是让系统看到这一行的时候，会沿着对应路径查找 node 并执行

// 请求 commander 库
const program = require('commander')
// 打印炫酷
const figlet = require('figlet')
const chalk = require('chalk')
// 请求 lib/update.js
const updateChk = require('../lib/update')

// 从 package.json 文件中请求 version 字段的值，-v和--version是参数
program.version(require('../package.json').version, '-v, --version')

// 请求 lib/mirror.js 镜像
const setMirror = require('../lib/mirror')

// 请求 lib/download.js 下载模板
const dlTemplate = require('../lib/download')

// 请求 lib/init.js 初始化文件
const initProject = require('../lib/init')

// 创建模板 lib/create.js 
const createTemp = require('../lib/create.js')

// @kun-cli upgrade 检测更新
program
    // 声明的命令
    .command('upgrade')
    // 描述信息，在帮助信息时显示
    .description("检查@kun-cli是否为最新版本.")
    .action(() => {
        // 执行 lib/update.js 里面的操作
        updateChk()
    })
// @kun-cli mirror 切换镜像链接
program
    .command('mirror <template_mirror>')
    .description("设置模板镜像.")
    .action((tplMirror) => {
        setMirror(tplMirror)
    })
// @kun-cli template 下载/更新模板
program
    .command('template')
    .description("从镜像下载模板.")
    .action(() => {
        dlTemplate()
    })

// @kun-cli init 初始化项目
program
    .name('@kun-cli')
    .usage('<commands> [options]')
    .command('init <project_name>')
    .description('创建项目.')
    .action(project => {
        initProject(project)
    })

// bin/cli.js
program
    .command('create [name]')
    .description('创建一个新项目')
    .option('-f, --force', 'overwrite target directory if it exist')
    .action((name, options) => {
        createTemp(name, options)    // 引入 create.js 文件
    })

program
    .command('config [value]')
    .description('检查并修改配置')
    .option('-g, --get <path>', 'get value from option')
    .option('-s, --set <path> <value>')
    .option('-d, --delete <path>', 'delete option from config')
    .action((value, options) => {
        console.log('自定义config 命令：', value);
    })

// 打印一个有趣的 help
program
    .on('--help', () => {
        // 使用 figlet 绘制 Logo
        console.log('\r\n' + figlet.textSync('imKun', {
            font: 'Ghost', // 字体
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true,
        }));
        // 新增说明信息
        console.log(`\r\nRun ${chalk.cyan(`roc <command> --help`)} show details\r\n`)
    })


// 解析命令行参数
program.parse(process.argv)