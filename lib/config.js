// 请求 fs-extra 库
const fse = require('fs-extra')

const path = require('path')
// 为了能够记录切换后的镜像链接，我们需要在本地创建 config.json 文件来保存相关信息，当然不是由我们手动创建，而是让脚手架来创建，
// 整个逻辑过程如下
// 声明配置文件内容
const jsonConfig = {
  "name": "@kun-cli",
  "mirror": "https://zpfz.vercel.app/download/files/frontend/tpl/@kun-cli/"
}

// 拼接 config.json 完整路径
const configPath = path.resolve(__dirname,'../config.json')

async function defConfig() {
  try {
  	// 利用 fs-extra 封装的方法，将 jsonConfig 内容保存成 json 文件
    await fse.outputJson(configPath, jsonConfig)
  } catch (err) {
    console.error(err)
    process.exit()
  }
}

// 将上面的 defConfig() 方法导出
module.exports = defConfig