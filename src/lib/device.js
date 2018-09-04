const ua = window.navigator.userAgent
const device = {
  /**
   * 判断是否是移动端
   * isMobile
   * @return { Boolean } 返回是否是移动端的布尔值
   */
  isMobile () {
    const EXP_ISMOBILE = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    return EXP_ISMOBILE.test(ua)
  },

  /**
   * 判断是否是IOS操作系统
   * @return { Boolean } 返回是否是IOS的布尔值
   */
  isIOS () {
    const EXP_IOS = /(iPhone|iPad|iPod|iOS)/i
    return EXP_IOS.test(ua)
  },

  /**
   * 判断是否是Android操作系统
   * @return { Boolean } 返回是否是Android的布尔值
   */
  isAndroid () {
    return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1
  },

  /**
   * 横竖屏的判断,如果是横屏幕显示,显示dom提示竖屏显示
   */
}
export default device
