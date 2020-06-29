## d-utils

v4版本将所有方法拆分

# 快速使用
#### 安装 （4.0）
使用npm安装 `d-utils` 依赖
```bash
npm i d-utils
```
yarn
```hash
yarn add d-utils
```
#### 使用
获取所有方法
```js
import * as Dutils from 'd-utils'
Dutils.addClass(document.body, 'd-utils')
```
按需引入
```js
import { addClass, Log } from 'd-utils'
addClass(document.body, 'd-utils')
Log.info('d-utils')
```
