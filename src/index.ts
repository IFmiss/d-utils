import './style.scss'
/**
 * @author ifmiss
 * @version 1.1.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
import { DomUtils } from './lib/index'
import { PerformanceUtils } from './lib/index'
import { DeviceUtils } from './lib/index'
import { StoreUtils } from './lib/index'
import Dutils from './lib/index'
console.log(DomUtils)
console.log(PerformanceUtils.timing)
console.log(DeviceUtils.EXP_IOS)
console.log(DeviceUtils.isIOS())
console.log(DeviceUtils.isAndroid())
DeviceUtils.checkLayoutOrientation()

console.log(Dutils)

console.log(StoreUtils)
window.StoreUtils = StoreUtils