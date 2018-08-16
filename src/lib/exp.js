/**
 * 正则校验相关
 */

const exp = {
  /**
   * 判断手机格式是否正确
   * @param { String } num 手机号 字符串
   * @return { Boolean } true是有效  false无效
   */
  isInvalidPhoneNum (num) {
    const exp = /^1[3-9]\d{9}$/
    const phoneNum = String(num)
    return exp.test(phoneNum)
  },

  /**
   * 判断email格式是否正确
   * @param { String } email 邮箱名称 字符串
   * @return { Boolean } true是有效  false无效
   */
  isInvalidEmail (email) {
    const exp = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    const mail = String(email)
    return exp.test(mail)
  },

  /**
   * 判断当前是否是微信浏览器
   * @return Boolean 
   */
  isWeiXin () {
    const ua = window.navigator.userAgent.toLowerCase()
    return ua.match(/MicroMessenger/i) === 'micromessenger' ? true : false
  }
}

export default exp
