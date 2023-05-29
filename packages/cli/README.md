公司企业级前端工程脚手架v2版本，适合于前后端分离的中后台项目。
此版本解决了v1版本构建过于繁琐的问题，以及因为构建方式导致的的package.json的name若不修改默认会为icsoc-fbuild-project的问题。


## 特征
- **标准的设计规范**：集成基于icsoc UI设计规范的组件、样式扩展库[icosc-antdex](https://git.icsoc.net/frontend/icsoc-antdex)
- **开箱即用的开发模式**：提供成熟稳定的工程实践，使项目开发者更多精力投入项目业务开发本身。
- **现代web技术栈**：基于react+redux+react-router+axios的开发框架。
- **Mock数据**：基于[icsoc-mock](https://git.icsoc.net/frontend/icsoc-mock)实现项目开发前期的本地模拟接口数据调试。
- **常用模版（待完善）**：构建时可选项。抽取公司项目的可复用页面和场景。
- **编码规范检查（待添加）**：构建时可选项。待团队整体水平后期会强制在编译打包前执行[icosc JavaScript编码规范](https://confluence.icsoc.net/pages/viewpage.action?pageId=7254415)检测。


## 支持环境
- 现代浏览器和 IE9 及以上。

## 使用
#### 1. 安装构建工具

请确保当前源已切换为公司npm私库源（[http://192.168.166.89:4874/](http://192.168.166.89:4874/)），推荐使用[yrm](http://192.168.166.89:4874/#/detail/icsoc-yrm)来管理你的源，便于切换。
```
$ yarn global add sddz-cli
```
#### 2. 执行构建命令

进入常用的项目存放目录，执行构建命令
```
$ sddz new 
```

#### 3. 启动项目

```
$ cd my-first-app && yarn dev
```

#### 4. 访问项目

默认访问地址：[http://127.0.0.1:3001](http://127.0.0.1:3001)



