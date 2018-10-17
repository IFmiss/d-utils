import './style.scss'
/**
 * @author ifmiss
 * @version 1.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
import dom from './lib/dom.js'
// 工具类
import utils from './lib/utils.js'
// 数据存储类
import store from './lib/store.js'
// 验证类
import exp from './lib/exp.js'
// 设备信息类
import device from './lib/device.js'

// 测试d-audio
import DAudio from 'd-audio'

const D_JS_UTILS = {
  store,
  dom,
  utils,
  exp,
  device
}
window.Dutils = D_JS_UTILS

new DAudio({
  ele: '#testaudio',
  src: '',
  imageUrl: 'http://www.daiwei.org/index/music/musicImg/Faded.jpg'
})

export default D_JS_UTILS