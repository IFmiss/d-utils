# store对象
store对象是数据的一些操作

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

## rmCookie
`rmCookie`根据name删除Cookie
##### 参数
  - `name` cookie名称
```js
/**
 * 删除Cookie
 * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
 */
```

## saveDataAsFile
`saveDataAsFile`获取元数据存储本地，相当于下载一个文件
##### 参数
  - `name` 相对路径的文件名称   如 ./test.txt
  - `file` 要存储的数据 类似 e.target.files[0] 这种file对象
```js
/**
 * 数据存储本地  相当于下载一个文件  该文件是需要存储的数据   的方法
 * @param { String } name 相对路径的文件名称   如 ./test.txt
 * @param { File } file 要存储的数据 类似 e.target.files[0] 这种file对象
 */
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

##getRandomDataFromArr
`getRandomDataFromArr`从数组中获取num 个随机不重复的元素
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
