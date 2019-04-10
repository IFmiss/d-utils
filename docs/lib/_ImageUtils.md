# ImageUtils
ImageUtils 不是静态类  需要new ImageUtils() 实例化才可操作

## pr
`pr` 设备像素比 window.devicePixelRatio

## persent
`persent` 基于当前屏幕的比例

## canvas
`canvas` canvas的元素

## context
`context` canvas 上下文

## bgSrc
`bgSrc` 合并的背景地址

## canvasWidth
`canvasWidth` canvas的宽度  实际上数合并背景的宽度

## canvasHeight
`canvasHeight` canvas的高度  实际上数合并背景的高度

## initCanvas
`initCanvas`: 方法 初始化canvas的设置, 以及将背景图画进去
#### 参数
- `canvasRef` canvas 元素
```js
/**
 * 初始化canvas的设置
 * @param { Element } canvas  canvas 元素
 * @return { Promise } 返回
 */
```
#### `Demo:`
```js
const imageCanvas = new ImageUtils()
imageCanvas.bgSrc = 'http://www.bing.com/th?id=OHR.BlueTide_ZH-CN4055424992_1920x1080.jpg'
imageCanvas.persent = 0.5
imageCanvas.initCanvas(document.getElementById('canvas'))
```

## printImage
`printImage`: 方法 图片合成
#### 参数
- `imageInfo`
  - `src` 合成的图片地址
  - `left` left 的位置 百分比 0 - 1 相对于整个宽度
  - `top` top 的位置 百分比 0 - 1 相对于整个高度
  - `with` with 的宽度 百分比 0 - 1  相对于整个宽度
  - `height` height 的宽度 百分比 0 - 1 相对于整个高度 (`needRound`为true 的时候width和height相等，相当于是一个圆)
  - `needRound` 是否需要绘制圆形图片合成
#### `Demo:`
```js
imageCanvas.printImage({
  src: 'http://www.bing.com/th?id=OHR.BlueTide_ZH-CN4055424992_1920x1080.jpg',
  with: 0.1,
  height: 0.1,
  left: 0.1,
  top: 0.1,
  needRound: false
})
```

## convertCanvasToImage
`convertCanvasToImage`: canvase转换成图片
#### 参数
- `canvas` canvas的元素
```js
/**
 * @description canvase转换成图片
 * @return { Image } 返回一个new Image的实例
 * @param canvas 
 */
```
#### `Demo:`
```js
imageCanvas.convertCanvasToImage(imageCanvas.canvas)
```
