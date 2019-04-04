/**
 * @author ifmiss
 * @version 1.1.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
import dom from './domUtils/index'
// 工具类
import utils from './utils'
// 数据存储类
import store from './storeUtils/index'
// 验证类
import exp from './exp'
// 设备信息类
import device from './deviceUtils/index'
// 注解
import decorator from './decorator'
// 微信相关
import weixin from './weixin'
// 性能
import performance from './performanceUtils/index'
// 打印
import log from './logUtils/index'

export const DomUtils = dom
export const PerformanceUtils = performance
export const DeviceUtils = device
export const StoreUtils = store
export const LogUtils = log

export default {
  dom,
  utils,
  store,
  exp,
  device,
  decorator,
  log,
  weixin,
  performance
}
