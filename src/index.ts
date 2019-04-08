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
import { LogUtils, GenericUtils, UrlParse, WeixinUtils } from './lib/index'

import Dutils from './lib/index'
// console.log(DomUtils)
console.log(PerformanceUtils.timing)
console.log(DeviceUtils.EXP_IOS)
console.log(DeviceUtils.isIOS())
console.log(DeviceUtils.isAndroid())
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
WeixinUtils.initWxConfig({
  debug: true,
  appId: '1111',
  timestamp: '123123123',
  nonceStr: '123123123123',
  signature: '23123123',
  jsApiList: ['onMenuShareAppMessage']
})
WeixinUtils.wxShare({
  title: '111',
  desc: '2222',
  link: '44444'
}).then(() => {
  alert('success')
}).catch(() => {
  alert('error')
})