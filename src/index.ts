import './style.less'
/**
 * @author ifmiss
 * @version 1.1.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
// import { DomUtils } from './../dist/lib/index'
// import EventUtils from './lib/eventUtils/index'
import { PerformanceUtils } from './lib/index'
import { DeviceUtils } from './lib/index'
import { StoreUtils } from './lib/index'
import { LogUtils, GenericUtils, UrlUtils, WeixinUtils, ExpUtils, HttpRequestUtils, ImageUtils } from './lib/index'
import { axiosConfig } from './lib/httpRequestUtils/axiosConfig'
import Dutils from './lib/index'
HttpRequestUtils.init(function () {
  console.log('init')
})
HttpRequestUtils.get('http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getImageByBingJson')
DeviceUtils.checkLayoutOrientation()
GenericUtils.calcStringLength('1111')
