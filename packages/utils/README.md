##  js 基础工具库

### 用法

```sh
npm i @sddz/utils
```

or

```sh
yarn  @sddz/utils
```

#### 导入项目

```js
import sddzUtils from ' @sddz/utils';

console.log( sddzUtils.reverseString('abc'));
```

## 核心脚本命令

| Command            | Description                                              |
| ------------------ | -------------------------------------------------------- |
| `npm run jsDoc`    | 根据代码注释生成文档（即便代码有误，因为只扫描代码注释） |
| `npm run test:all` | 完整测试                                                 |
| `npm run test:dev` | 开发单测 按 o 进入 o 模式：只运行与更改文件相关测试      |
| `npm run types`    | 根据 jsdoc 注释生成 d.ts 文件                            |
| `npm run compile`  | 仅打包                                                   |
| `npm run build`    | 生产环境，打包，生成文档，types（lerna统一调用）                          |
| `npm run pub`  | 采用 np 协助发包 npm(统一改为learna 发包)                                     |


## 注意
#### 认真编写函数描述内容，将影响检索结果
#### 跑单测，跑单测，跑单测...,保障覆盖率

## todo
#### 导出采用默认和按需如何平衡
