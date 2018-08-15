# utils
utils 工具类

## console
`console`console的美化样式 默认是小的内容格式
##### 参数
  - `text` console 的内容
  - `isMax` 类型  true 是显示三行大的内容   false 则是正常的一行显示
```js
/**
 * console的美化样式
 * @param { String } text 内容
 * @param { Boolean } isMax 是否是较大显示console的高度，如果console的内容较多建议设置为false
 */
```
##### `Demo`:
```js
Dutils.utils.console('hello world')
```

## initEsDataType
`initEsDataType`设置类型的判断
```js
/**
 * is_Null, is_Undefined, is_Object, is_Array, is_String, is_Number, is_Boolean, is_Function, is_RegExp
 */
```
##### `Demo`:
```js
Dutils.utils.initEsDataType()
Array.is_Null([])
```

## notification
`notification`浏览器notification全局提示，并返回一个Promise
#### 参数
  - `options` 参数内容
  - `options.title`标题
  - `options.body`正文
  - `options.icon`logo
  - `options.show` 方法 显示时候触发的回调
  - `options.click`方法 点击时触发的回调
```js
/**
 * 浏览器提示
 * @param { Object } options
 * @param { String } options.title 浏览器提示的标题  类似标题
 * @param { String } options.body 浏览器提示的内容主体  类似正文
 * @param { String } options.icon 浏览器提示的图标用于  类似logo效果
 * @param { Function } options.show 浏览器提示的显示的时候执行的方法
 * @param { Function } options.click 浏览器提示被鼠标点击执行的方法
 * @returns { Promise } resolve(options) 浏览器可以显示
 * @returns { Promise } reject(options) 浏览器不可以显示
 */
```
##### `Demo`:
```js
const data = {
  title: 'notification',
  body: 'this is a test',
  logo: 'http://www.daiwei.org/index/images/logo/dw1.png'
}
Dutils.utils.notification(data)
```

## randomColor
`randomColor`随机生成一个rgba的颜色值
#### 参数
  - `opacity` 透明度 默认为1
```js
/**
 * 返回rgba随机色
 * @param { Number } opacity 透明度 0～1之间
 * @returns { String } rgba色值
 */
```
##### `Demo`:
```js
const color Dutils.utils.randomColor(1)
Dutils.utils.console(color)
```

## showLayoutFramework
显示元素的outline出现布局框架，会在所有的dom元素上添加一个outline的随机颜色样式，方法来自Addy Osmani
##### `Demo`:
```js
Dutils.utils.showLayoutFramework()
```

## parseUrl
`parseUrl`将url的参数解析成对象的格式
#### 参数
  - `url` 解析的地址链接
```js
/**
 * 返回浏览器url的参数
 * @param { String } url 地址字符串
 * @returns { Object } 返回一个参数对象
 */
```
##### `Demo`:
```js
Dutils.utils.parseUrl('www.daiwei.org?name=daiwei&id=123')
```
##### `return`
    - `name`: daiwei
    - `id`: 123

## calcStringLength
`calcStringLength`计算字符串的长度
#### 参数
  - `isStrict`是否按照汉字两个字符计算
```js
/**
 * 计算字符串长度 isStrict为true的时候 返回一个字符串的长度，汉字算2个字符长度
 * @param { String } str 要计算的字符串
 * @param { Boolean } isStrict true 返回一个字符串的长度，汉字算2个字符长度; false 直接返回长度
 * @returns { Number } 返回字符串长度
 */
```
##### `Demo`:
```js
const str = 'd-js-utils组件'
Dutils.utils.console(Dutils.utils.calcStringLength(str))
Dutils.utils.console(Dutils.utils.calcStringLength(str, true))
```
##### `return`
    - 第一个返回结果：9
    - 第二个返回结果：11

## strTrim
`strTrim`字符串去空格
#### 参数
  - `type`判断的类型
```js
/**
 * 字符串的去除空格
 * @param { String } str 操作的字符串
 * @param { Number } type 类型 0: 去除首位空格；1: 去除所有空格； 2: 去除左边空格； 3： 去除右边空格； 默认为去除首尾空格
 * @returns { String } 返回操作之后的字符串
 */
```
##### `Demo`:
```js
const str = ' d -js- ut ils '
// 0: 去除首位空格 默认为0
Dutils.utils.strTrim(str)
Dutils.utils.strTrim(str, 0)
// 1: 去除所有空格
Dutils.utils.strTrim(str, 1)
// 2: 去除左边空格
Dutils.utils.strTrim(str, 2)
// 3: 去除右边空格
Dutils.utils.strTrim(str, 3)
```
##### `return` 为方便比较添加引号
    - 第一个返回结果：'d -js- ut ils'
    - 第二个返回结果：'d -js- ut ils'
    - 第三个返回结果：'d-js-utils'
    - 第四个返回结果：'d -js- ut ils '
    - 第五个返回结果：' d -js- ut ils'

## throttle
`throttle`节流函数，设定多少秒执行下一次效果
  - `fn`方法 需要节流的函数
  - `t`节流时间，多久以后执行一次方法 单位ms
```js
/**
 * 函数节流
 * @param { Function } fn 需要节流的函数
 * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
 */
```
##### `Demo`:
```js
// 在鼠标resize的过程中，1秒触发一次，如果resize了10秒相当于console.log('resize')只执行了10次
window.resize = Dutils.utils.throttle(function () {
  console.log('resize')
}, 1000)
```

## debounce
`debounce`函数防抖指定时间以后才能继续执行fn方法
  - `fn`方法 需要防抖的函数
  - `t`防抖时间，多久以后才能再执行 单位ms
```js
/**
 * 函数防抖
 * @param { Function } fn 需要防抖的函数
 * @param { Number } t 防抖时间，多久以后才能再执行
 */
```
##### `Demo`:
```js
// 在鼠标resize的过程中，1秒以后可以被执行，如果在1秒内触发resize，则从新计算下一个一秒再允许执行
window.resize = Dutils.utils.debounce(function () {
  console.log('resize')
}, 1000)
```