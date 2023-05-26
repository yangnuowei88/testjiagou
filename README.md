<div align="center">

<img src="./docs/_media/logo.png" width="126"/>

# sinokit

Vue.js 2.x 组件库、基础组件、业务组件、区块、模板

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![](https://img.shields.io/npm/v/@sddz/components.svg?style=flat-square)](https://www.npmjs.com/package/@sddz/components)
[![](https://img.shields.io/npm/l/@sddz/components.svg?style=flat-square)](https://www.npmjs.com/package/@sddz/components)
[![](https://img.shields.io/npm/dt/@sddz/components.svg?style=flat-square)](https://www.npmjs.com/package/@sddz/components)

</div>

组件文档：http://blog.giscafer.com/sinokit

## 运行须知


- 注意node 的版本 选用的是14.15,主要是node-sass 对node 版本主版本有要求
- 然后另外一个包也对node 有要求，总之用这个版本就OK
- 删除了原来仓库的package.lock 文件，才安装成功的
- ts 代码报错了，直接给忽略注解了
## Install dependencies

```
yarn //安装壳子项目依赖
lerna bootstrap //子包依赖安装
```

### demo（方便直接调试组件，直接引用源码）

```
npm run start
```


### Build（package 子包构建）

```
npm run build
```

## Related

- [docsify-demo-codesandbox-vue](https://github.com/giscafer/docsify-demo-codesandbox-vue)

