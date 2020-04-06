/**
 * @description 正则表达式 判断是否为移动设备
 */
export const EXP_MOBILE: RegExp = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i

/**
 * @description 判断是否是移动端
 * @return { Boolean } 返回是否是移动端的布尔值
 * @example
 * isMobile() // false
 */
function isMobile(): boolean {
  const ua = window.navigator.userAgent
  return EXP_MOBILE.test(ua)
}

export default isMobile
