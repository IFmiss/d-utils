import './style.less'
/**
 * @author ifmiss
 * @version 1.1.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
// import { DomUtils } from './../dist/lib/index'
// import EventUtils from './lib/eventUtils/index'
import { DeviceUtils } from './lib/index'
import { StoreUtils } from './lib/index'
import { LogUtils, GenericUtils, UrlUtils, WeixinUtils, ExpUtils, HttpRequestUtils, ImageUtils, PerformanceUtils, PromiseUtils } from './lib/index'
import { axiosConfig } from './lib/httpRequestUtils/axiosConfig'
import Dutils from './lib/index'
PerformanceUtils.logger()
HttpRequestUtils.init(function () {
  console.log('init')
})
HttpRequestUtils.get('http://www.daiwei.org/vue/server/home.php', {
  inAjax: 1,
  do: 'getImageByBingJson'
})

let t = 0
setTimeout(() => {
  t = 1
}, 5000)

async function aaa () {
  console.log('start')
  await PromiseUtils.wait(() => {
    return t > 0
  }, 1000, 3000).then(() => {
    console.log(1111)
  }).catch(() => {
    console.log(22222)
  })
  console.log('哈哈哈哈啊哈哈哈哈')
}
aaa()

DeviceUtils.checkLayoutOrientation()
GenericUtils.calcStringLength('1111')
