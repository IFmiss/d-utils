# 快速使用
#### 安装
使用npm安装 `d-js-utils` 依赖
```bash
npm i d-js-utils
```
#### 使用
npm 安装
```js
import Dutils from 'd-js-utils'
Dutils.dom.addClass(document.body, 'd-js-utils')
```
直接引用js
```html
<script src="www.daiwei.org/d-js-utils.js"></script>
<script>
  Dutils.dom.addClass(document.body, 'd-js-utils')
</script>
```
复制一下代码在控制台打印一下，看会有什么变化
```js
Dutils.dom.cssFilter(document.body, 'grayscale', 1)
```
```js
Dutils.utils.openFullScreen(document.getElementsByTagName('html')[0])
```
```js
Dutils.utils.exitFullScreen()
```
##### 后续demo都会使用实例化的`Dutils`