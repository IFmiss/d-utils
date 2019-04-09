import './style.scss'
/**
 * @author ifmiss
 * @version 1.1.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
// import { DomUtils } from './../dist/lib/index'
import { PerformanceUtils } from './lib/index'
import { DeviceUtils } from './lib/index'
import { StoreUtils } from './lib/index'
import { LogUtils, GenericUtils, UrlParse, WeixinUtils, ExpUtils, HttpRequestUtils, ImageUtils } from './lib/index'
import { axiosConfig } from './lib/httpRequestUtils/axiosConfig'
import Dutils from './lib/index'
DeviceUtils.checkLayoutOrientation()

console.log(Dutils.GenericUtils)

console.log(GenericUtils.notification)
console.log(GenericUtils.formatDate('yyyy-MM-dd', new Date()))
LogUtils.logInfo(window.screen)
LogUtils.logSuccess(window.screen)
LogUtils.logError(window.screen)
LogUtils.logWarning(111)
LogUtils.logBeauty('-----------------')
console.log(UrlParse)
console.log(WeixinUtils.plantSdkUrlIosOrAndorid())
document.getElementById('title').onclick = GenericUtils.debounce(function () {
  console.log('你点击了一次')
}, 1000)
document.getElementById('username').onclick = GenericUtils.throttle(function () {
  console.log('你点击了一次')
}, 1000)
console.log(ExpUtils.isObject({'a': 12}))
ExpUtils.isEmptyObject(1)
HttpRequestUtils.init().get('http://www.daiwei.org/vue/server/home.php?inAjax=1&do=updataTipsInfo', {
})

const imageCanvas = new ImageUtils()
imageCanvas.bgSrc = 'http://www.bing.com/th?id=OHR.BlueTide_ZH-CN4055424992_1920x1080.jpg'
imageCanvas.persent = 0.5
imageCanvas.initCanvas(document.getElementById('canvas'))
.then((context) => {
  console.log(context)
  imageCanvas.printImage(context, {
    src: 'http://www.bing.com/th?id=OHR.BlueTide_ZH-CN4055424992_1920x1080.jpg',
    with: 0.1,
    height: 0.1,
    left: 0.1,
    top: 0.1,
    needRound: false
  }).then((context) => {
    imageCanvas.printImage(context, {
      src: 'http://www.bing.com/th?id=OHR.BlueTide_ZH-CN4055424992_1920x1080.jpg',
      with: 0.2,
      height: 0.2,
      left: 0.2,
      top: 0.2,
      needRound: true
    })
  })
})
// ExpUtils.isPhoneNum(1)
// WeixinUtils.initWxConfig({
//   debug: true,
//   appId: '1111',
//   timestamp: '123123123',
//   nonceStr: '123123123123',
//   signature: '23123123',
//   jsApiList: ['onMenuShareAppMessage']
// })
// WeixinUtils.wxShare({
//   title: '111',
//   desc: '2222',
//   link: '44444'
// }).then(() => {
//   alert('success')
// }).catch(() => {
//   alert('error')
// })