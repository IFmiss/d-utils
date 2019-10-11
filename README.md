## 关于d-utils-lite

#### 产生背景
d-utils过于庞大导致部分代码无法树摇

#### 功能描述
主要是讲通用的非class类的方法集成在 d-utils-lite 模块直接引入即可使用

#### 安装
使用npm安装 `d-utils-lite` 依赖
```bash
npm i d-utils-lite
```
yarn
```hash
yarn add d-utils-lite
```
#### 使用
获取所有方法
```js
import * as DutilsLite from 'd-utils-lite'
DutilsLite.addClass(document.body, 'd-utils-lite')
```
按需引入
```js
import { addClass } from 'd-utils-lite'
addClass(document.body, 'd-utils-lite')
```
