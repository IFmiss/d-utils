import './style.scss'
/**
 * @author ifmiss
 * @version 1.1.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
// import D_JS_UTILS from './lib/index'
import PerformanceUtils from './lib/performanceUtils/index'
// window.Dutils = D_JS_UTILS
import DomUtils from './lib/domUtils/index'
// D_JS_UTILS.device.checkLayoutOrientation()
console.log(PerformanceUtils)
DomUtils.addClass(document.body, 'dauweu')
// export default D_JS_UTILS