# StoreUtils 静态类
StoreUtils 类是数据的一些操作

## setCookie
`hasClass`设置Cookie
##### 参数
  - `name` cookie名称
  - `value` cooke的值
  - `exp` 过期时间 默认2小时 单位毫秒
```js
/**
 * 设置Cookie
 * @param { String } name cookie名称
 * @param { String } value cooke的值
 * @param { Number } exp 过期时间 默认2小时 单位毫秒
 */
```
##### `Demo`:
```js
// 设置name为test的值为12345，设置过期时间为1小时
StoreUtils.setCookie('test', '12345', 60 * 60 * 1000)
```

## getCookie
`getCookie`根据name获取Cookie
##### 参数
  - `name` cookie名称
```js
/**
 * 获取Cookie
 * @param { String } name cookie名称
 * @returns { (Array | Null) } 返回的数据
 */
```
##### `Demo`:
```js
StoreUtils.getCookie('test')
```
##### `return`
    - 12345

## removeCookie
`removeCookie`根据name删除Cookie
##### 参数
  - `name` cookie名称
```js
/**
 * 删除Cookie 实际是设置Cookie过期
 * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
 */
```
##### `Demo`:
```js
StoreUtils.removeCookie('test')
```

## fileToFormData
`fileToFormData`将File文件转换成FormData对象
##### 参数
  - `obj` 对象内容 {file: e.target.files[0], id: '100001', name: 'hello world'}
```js
/**
 * 将File文件转换成FormData对象
 * @param {(Object|Blob)} obj 顺带传的参数如,文件内容必传
 * 如：{file: e.target.files[0], id: '100001', name: 'hello world'}
 */
```
##### `Demo`:
```js
  const data = {
      file: e.target.files[0],
      name: 'd-utils',
      id: 123,
      desc: 'hello'
  }
StoreUtils.fileToFormData(...data)
```

## randomDataFromArr
`randomDataFromArr`从数组中获取num 个随机不重复的元素
##### 参数
  - `arr` 数组内容
  - `num` 取出的数量
```js
/**
 * 从数组中获取num 个随机不重复的元素
 * @param { Arrary } arr 数组
 * @param { Number } num 数量
 * @returns { Arrary } 返回数组集合
 */
```
##### `Demo`:
```js
StoreUtils.randomDataFromArr([1,2,3,4,5,44,3,2,1,9,0,45,678], 5)
```
##### `return`
    - [4, 9, 45, 2, 0]

## deepClone
`deepClone`为深拷贝对象，改变原来的对象内容不会影响到已有的对象，可以使用递归遍历和JSON序列化，反序列化的方式，这里选择的是前者
##### 参数
  - `obj` 被拷贝的对象
```js
/**
 * 深拷贝
 * @param { Object } obj 被拷贝的对象
 * @return { Object } 返回新的对象
 */
```
##### `Demo`:
```js
  let a = {
      a: 1,
      b: 2,
      c: 3,
      d: [1, 2]
  }
let b = StoreUtils.deepClone(a)
a.d[0] = 3
console.log(a)
console.log(b)
```
##### `return`
```js
a: {a: 1, b: 2, c: 3, d: [3, 2]}
b: {a: 1, b: 2, c: 3, d: [1, 2]}
// 此时修改a.d[0]的值， a对象变化了，b对象没有随之改变
```

## extend
`extend` 是基于Object.assign进行的对象继承
```js
/**
 * extend继承方法 Object.assign(...arg)的包装
 * b在a的属性上拓展且返回一个新的对象
 */
let a = {a: 1}
let b = {a: 2}
StoreUtils.extend(a, b)     // {a: 2}   但是此时 a的值也会变成{a: 2}
StoreUtils.extend({}, a, b)     // {a: 2}   此时 a的值还是{a: 1}
```

## checkType
`checkType`用于检索数据类型并返回类型名称, 该方法适用于任何数据格式，通过Object.prototype.toString.call()对数据的处理拿到数据类型格式
```js
/**
 * 检索数据类型并返回数据类型名称 object array string undefined bool number null 等等...
 * @param { Any } data 要判断的数据
 */
```
##### `Demo`:
```js
StoreUtils.checkType('1')   // string
StoreUtils.checkType({})   // object
StoreUtils.checkType([])   // array
StoreUtils.checkType(localStorage)   // storage
```
你可以在判断数据类型的时候用该方法判断
```js
// 判断data是否是数组
StoreUtils.checkType(data) !== 'array'
```

## uniqueArray
`uniqueArray`数组去重
```js
/**
 * 数组去重
 * @param { Arrary } arr 要去重的arr
 * @return { Array } 返回一个新的数组，不改变原来的数组
 */
```
##### `Demo`:
```js
StoreUtils.uniqueArray([1,2,3,3,,3,3,'4',"4",'4',])   // [1, 2, 3, undefined, "4"]
```

## dataUrlToBlob
`dataUrlToBlob` file转成blob数据流的格式
```ts
/**
 * @description 文件转成blob流
 * @param { File } dataUrl  单个file
 * @return { Blob } 返回新的文件流  可以append到formdata中
 */
```
##### `Demo`:
```ts
StoreUtils.dataUrlToBlob(file[0])
```