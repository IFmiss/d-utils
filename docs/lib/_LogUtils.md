# LogUtils 类
LogUtils 是log打印相关的封装

## infoColor
`infoColor`: 属性， 提示色  '#0099FF'   蓝色

## successColor
`successColor`: 属性， 提示色  '#00CC99'   绿色

## errorColor
`errorColor`: 属性， 提示色  '#CC3366'   红色

## warningColor
`warningColor`: 属性， 提示色  '#CC9966'   黄色

## console
`console`: 方法 console提示信息
#### 参数
- `data` 打印的数据信息
- `dataTitile` 提示文案
- `color` 颜色
```js
/**
 * console提示信息
 * @param { any } data  打印的数据信息
 * @param { string } dataTitile  提示文案
 * @param { string } color  颜色
 * @example
 */
```
#### `Demo:`
```js
LogUtils.console(window.screen, 'window:', 'red')
```

## logInfo
`logInfo`: 方法，提示信息 颜色为 infoColor
#### 参数
- `data` 打印的数据信息
- `dataTitile` 提示文案
```js
LogUtils.logInfo('date', 'logInfo')
```

## logSuccess
`logSuccess`: 方法，成功信息 颜色为 successColor
#### 参数
- `data` 打印的数据信息
- `dataTitile` 提示文案
```js
LogUtils.logSuccess('date', 'logSuccess')
```

## logError
`logError`: 方法，提示信息 颜色为 errorColor
#### 参数
- `data` 打印的数据信息
- `dataTitile` 提示文案
```js
LogUtils.logError('date', 'logError')
```

## logWarning
`logWarning`: 方法，提示信息 颜色为 warningColor
#### 参数
- `data` 打印的数据信息
- `dataTitile` 提示文案
```js
LogUtils.logWarning('date', 'logWarning')
```

## logBeauty
`logBeauty` console的美化样式 默认是小的内容格式
##### 参数
  - `text` console 的内容
  - `options` 一个对象，里面有两个属性配置
    - `isMax` 类型  true 是显示三行大的内容   false 则是正常的一行显示
    - `colors` 背景色列表，是一个从左向右渐变的过程cd

```js
/**
 * console的美化样式
 * @param { String } text 内容
 * @param { Object } options 配置项，大小背景，和背景颜色设置
 * @prop { Boolean } options.isMax 是否是较大显示console的高度，如果console的内容较多建议设置为false 默认为小格式
 * @prop { Array } options.colors 背景色列表，是一个从左向右渐变的过程
 */
```
##### `Demo`:
```js
LogUtils.logBeauty('hello world')
LogUtils.logBeauty('这是一个console的方法，可以设置背景色的哦', {
  isMax: false,
  colors: ['#fa709a', '#fee140', '#ffb199']
})
```