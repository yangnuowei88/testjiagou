

# sddz

- 基础工具包，
- Vue.js 2.x 组件库、基础组件、业务组件、区块、模板
- 脚手架工具

组件文档：http://xxx.com

## 运行须知


- 注意node 的版本 选用的是14.15,主要是node-sass 对node 版本主版本有要求
- 然后另外一个包也对node 有要求，总之用这个版本就OK
## Install dependencies

```
yarn //安装壳子项目依赖(已锁定)
lerna bootstrap //子包依赖安装
```

### demo（方便直接调试组件，直接引用源码）

```
npm run start
```


### Build（所有package 子包构建）

```
npm run build
```


