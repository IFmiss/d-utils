# exp对象
exp对象是d-js-utlis里的一个属性，此属性包含对于一些字符，或者元素判断是否符合要求

## isInvalidPhoneNum
`isInvalidPhoneNum`判断是否是正确的手机号格式
##### 参数
  - `num` 手机号内容，字符串，如果不是字符串会被转换成字符
```js
/**
 * 手机号格式判断
 * @param { String } num 手机号
 */
```
##### `Demo`:
```js
Dutils.exp.isInvalidPhoneNum('13651971940')
```
##### `return`
    - true

## isInvalidEmail
`isInvalidEmail`判断是否是正确的邮箱地址格式
##### 参数
  - `email` 邮箱地址，如果不是字符串会被转换成字符
```js
/**
 * 邮箱地址格式判断
 * @param { String } num 邮箱
 */
```
##### `Demo`:
```js
Dutils.exp.isInvalidEmail('185098535@qq.com')
```
##### `return`
    - true