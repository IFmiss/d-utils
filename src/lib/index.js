/**
 * @author ifmiss
 * @version 1.1.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
import dom from './dom'
// 工具类
import utils from './utils'
// 数据存储类
import store from './store'
// 验证类
import exp from './exp'
// 设备信息类
import device from './device'
// 注解
import decorator from './decorator'
// 微信相关
import weixin from './weixin'
// 性能
import performance from './index.js'

const D_JS_UTILS = {
  store,
  dom,
  utils,
  exp,
  device,
  decorator,
  weixin,
  performance
}
export default D_JS_UTILS
