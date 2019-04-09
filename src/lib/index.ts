/**
 * @author ifmiss
 * @version 2.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
import dom from './domUtils/index'
// 工具类
import utils from './genericUtils/index'
// 数据存储类
import store from './storeUtils/index'
// 验证类
import exp from './expUtils/index'
// 设备信息类
import device from './deviceUtils/index'
// 注解
import decorator from './decorator'
// 微信相关
import weixin from './weixinUtils/index'
// 性能
import performance from './performanceUtils/index'
// 打印
import log from './logUtils/index'
// url相关
import url from './urlUtils/index'
// http相关
import http from './httpRequestUtils/index'
// 图片合成操作
import img from './imageUtils/index'

export const DomUtils = dom
export const PerformanceUtils = performance
export const DeviceUtils = device
export const StoreUtils = store
export const LogUtils = log
export const GenericUtils = utils
export const UrlParse = url
export const WeixinUtils = weixin
export const ExpUtils = exp
export const HttpRequestUtils = http
export const ImageUtils = img

export default {
  DomUtils: dom,
  GenericUtils: utils,
  StoreUtils: store,
  ExpUtils: exp,
  DeviceUtils: device,
  LogUtils: log,
  WeixinUtils: weixin,
  PerformanceUtils: performance,
  UrlParse: url,
  HttpRequestUtils: http,
  ImageUtils: img
}
