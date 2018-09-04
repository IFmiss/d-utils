/**
 * 校验相关
 */

const exp = {
  /**
   * 判断手机格式是否正确
   * @param { String } num 手机号 字符串
   * @return { Boolean } true是有效  false无效
   */
  isPhoneNum (num) {
    const exp = /^1[3-9]\d{9}$/
    const phoneNum = String(num)
    return exp.test(phoneNum)
  },

  /**
   * 判断email格式是否正确
   * @param { String } email 邮箱名称 字符串
   * @return { Boolean } true是有效  false无效
   */
  isEmail (email) {
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
  },

  /**
   * 判断字符串是否都是中文
   * @param { String } str 
   * @return Boolean 
   */
  isChinese (str) {
    const exp = /^[\u3220-\uFA29]+$/
    return exp.test(String(str))
  },

  /**
   * 初始化类型判断方法
   * 在d-utils被调用的时候自动再exp对象上新增isNull, isUndefined, isObject, isArray, isString, isNumber, isBoolean, isFunction, isRegExp
   * 之后就可以通过Dutils.exp.isUndefined ...这些进行数据格式判断
   */
  initEsDataType () {
    this.dataType = {}
    let type = (o) => {
      let s = Object.prototype.toString.call(o)
      return s.match(/\[object (.*?)\]/)[1].toLowerCase()
    }

    ['Null',
      'Undefined',
      'Object',
      'Array',
      'String',
      'Number',
      'Boolean',
      'Function',
      'RegExp'
    ].forEach(function (t) {
      exp['is' + t] = function (o) {
        return type(o) === t.toLowerCase()
      }
    })
  }
}

// 给exp动态添加数据类型验证方法，这是初始化的操作
exp.initEsDataType()
// 导出
export default exp
