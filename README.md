| 插件名字          | 插件作用                                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| chalk             | （控制台字符样式）                                                                             |
| commander         | （实现 NodeJS 命令行）                                                                         |
| download          | （实现文件远程下载）                                                                           |
| fs-extra          | （增强的基础文件操作库）                                                                       |
| handlebars        | （实现模板字符替换）                                                                           |
| inquirer          | （实现命令行之间的交互）                                                                       |
| log-symbols       | （为各种日志级别提供着色符号）                                                                 |
| ora               | （优雅终端 Spinner 等待动画）                                                                  |
| update-notifier   | （npm 在线检查更新）                                                                           |
| download-git-repo | （下载远程模板，不支持 Promise，需要使用使用 util 模块中的 promisify 方法对其进行 promise 化） |
| figlet            | （打造炫酷有趣的图案）                                                                         |

终端命令

```bash
 @kun-cli upgrade ## 检测更新
 @kun-cli mirror + 你的镜像链接 ## 设置下载模板时的镜像地址
 @kun-cli template  ##  下载/更新模板
 @kun-cli init 项目名字 ##  初始化模板
 @kun-cli create  项目名字 ##  拉取线上模板，这里示例vue的api文件
 @kun-cli --help  ##  展示帮助选项
```

调试打印

```bash
nodemon @kun-cli
```
