# 开始使用

## 通过 npm 安装

我们提供了 `@sddz/包名` npm 包，通过下面命令即可完成安装，`sddz` 依赖于 `element` 与 `vue`，所以不要忘记安装依赖包。

```bash
npm i @sddz/components -S
```

## 引入 @sddz/components

安装完成后，即可使用 `import` 或 `require` 使用。

完整引入 `@sddz/components`

```js
import Vue from 'vue';
import sddzComponents from '@sddz/components';

Vue.use(sddzComponents);
```

按需引入 `@sddz/components`

```js
import Vue from 'vue';
import { JsonEditor } from '@sddz/components'; // 引入单个组件，如 JsonEditor

Vue.component('JsonEditor', JsonEditor);
```

## @sddz/cli

安装工具，即可全局使用 `sddz` 命令

```
npm i @sddz/cli -g
```

使用 `sddz new` 命令从模板创建工程

```bash
sddz new //按照提示创建项目
```

> 更多功能开发中…

## @sddz/utils

安装

```
npm i @sddz/utils -S
```

vue 相关函数使用

```js
import sddzUtils from ' @sddz/utils';

console.log( sddzUtils.reverseString('abc'));
```



> 持续迭代更新……
