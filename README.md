<div align="center">

<img src="./docs/_media/logo.png" width="126"/>

# sinokit

Vue.js 2.x 组件库、基础组件、业务组件、区块、模板

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![](https://img.shields.io/npm/v/@sinokit/components.svg?style=flat-square)](https://www.npmjs.com/package/@sinokit/components)
[![](https://img.shields.io/npm/l/@sinokit/components.svg?style=flat-square)](https://www.npmjs.com/package/@sinokit/components)
[![](https://img.shields.io/npm/dt/@sinokit/components.svg?style=flat-square)](https://www.npmjs.com/package/@sinokit/components)

</div>

组件文档：http://blog.giscafer.com/sinokit

## 运行须知
### 注意node 的版本 选用的是14.15,主要是node-sass 对node 版本主版本有要求
### 然后另外一个包也对node 有要求，总之用这个版本就OK
### 删除了原来仓库的package.lock 文件，才安装成功的
### ts 代码报错了，直接给忽略注解了
### Install dependencies

```
yarn
lerna bootstrap
```

### demo

```
npm run start
```

### Docs

```
npm run docs
```

### Build

```
npm run build
```

## Contributing

- 欢迎 PR 一起共建

> 增加新特性或者组件时，先建个 issue 讨论确定，有效沟通后再编码

## Related

- [docsify-demo-codesandbox-vue](https://github.com/giscafer/docsify-demo-codesandbox-vue)

## Other

文档基于 [docsify](https://github.com/docsifyjs/docsify)，模板样式参考 [ve-charts](https://github.com/vueblocks/ve-charts)

工程使用 [Lerna](https://lerna.js.org/) monorepo 管理，延伸了解：

- [lerna workflow 杂谈项目管理方式](https://github.com/pigcan/blog/issues/16)
- [使用 lerna 优雅地管理多个 package](https://zhuanlan.zhihu.com/p/35237759)
- [基于 Lerna 管理 packages 的 Monorepo 项目组织](http://www.redream.cn/2020/04/23/%E5%9F%BA%E4%BA%8E-lerna-%E7%AE%A1%E7%90%86-packages-%E7%9A%84-monorepo-%E9%A1%B9%E7%9B%AE%E7%BB%84%E7%BB%87/)

## License

MIT
