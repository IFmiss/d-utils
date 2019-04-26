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
// 装饰器相关
import decorator from './decoratorUtils/index'
// event事件
// import event from './eventUtils/index'

/**
 * Dom相关静态类
 */
export const DomUtils = dom

/**
 * 性能相关静态类
 */
export const PerformanceUtils = performance

/**
 * 设备相关静态类
 */
export const DeviceUtils = device

/**
 * 数据存储静态类
 */
export const StoreUtils = store

/**
 * 日志 打印静态类
 */
export const LogUtils = log

/**
 * 通用工具静态类
 */
export const GenericUtils = utils

/**
 * url静态类
 */
export const UrlParse = url

/**
 * 微信相关静态类
 */
export const WeixinUtils = weixin

/**
 * 正则相关静态类
 */
export const ExpUtils = exp

/**
 * axios二次封装
 */
export const HttpRequestUtils = http

/**
 * 图片合成类
 */
export const ImageUtils = img

/**
 * 装饰器相关静态类
 */
export const DecoratorUtils = decorator

/**
 * 时间队列静态类
 */
// export const EventUtils = event

export default {
  DomUtils,
  GenericUtils,
  StoreUtils,
  ExpUtils,
  DeviceUtils,
  LogUtils,
  WeixinUtils,
  PerformanceUtils,
  UrlParse,
  HttpRequestUtils,
  ImageUtils,
  // EventUtils: event
  DecoratorUtils
}
