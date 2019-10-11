/**
 * @description  d-utils-lite
 */

/**
 * =============================================
 * dom 常用操作方法
 * =============================================
 */
import LogUtils from './logUtils/index'
import { GenericType } from './type'

/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */
export function hasClass (el: HTMLElement, className: string): boolean {
  return el.classList.contains(className)
}

/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */
export function addClass (el: HTMLElement, className: string | string[]): void {
  if (Array.isArray(className)) {
    className.forEach((item: string) => {
      if (!hasClass(el, item)) {
        el.classList.add(item)
      }
    })
    return
  }
  if (!hasClass(el, className)) {
    el.classList.add(className)
  }
}

/**
 * @description 元素删除class
 * @param { HTMLElement } el dom元素
 * @param { (String | Array) } className class名称，可以是多个
 * @example
 * removeClass(document.body, 'd-utils')
 */
export function removeClass (el: HTMLElement, className: string | string[]): void {
  if (Array.isArray(className)) {
    className.forEach((item: string) => {
      if (hasClass(el, item)) {
        el.classList.remove(item)
      }
    })
    return
  }
  if (hasClass(el, className)) {
    el.classList.remove(className)
  }
}

/**
 * @description 获取元素的css属性内容
 * @param { HTMLElement } el dom元素
 * @param { String } cssProp css的属性名称
 * @return { String } css对应的属性的值
 * @example
 * computedStyle(document.body, 'width')
 */
export function computedStyle (el: any, cssProp: any): void {
  if (!el) {
    LogUtils.logError('dom元素不存在', '[d-utils] computedStyle error => ')
    return
  }
  if (!cssProp) {
    LogUtils.logError('请输入需要查询的css属性名称', '[d-utils] computedStyle error => ')
    return
  }
  return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(el, '')[cssProp] : el.currentStyle[cssProp]
}

/**
 * @description js设置元素的filter样式
 * @param { HTMLElement } el dom元素
 * @param { (String | Object) } type filter类型   blur、opacity、grayscale、sepia、saturate、hue-rotate、invert、brightness、contrast、drop-shadow, 当type为Object的时候就是显示一系列键值对，设置多个filter属性 `blur、opacity、grayscale、sepia、saturate、hue-rotate、invert、brightness、contrast、drop-shadow
 * @param { (String | Number) } option 参数 10px  10% 等等，根据不同type的类型设定不同的参数配置
 * @example
 * // 单个filter属性传参数
 * cssFilter(document.body, 'grayscale', 1)
 * // 多个filter属性传参数
 * cssFilter(document.body, {
 *   grayscale: 0.5,
 *   opacity: 0.7,
 *   'hue-rotate': '90deg'
 * })
 */
export function cssFilter (el: HTMLElement, type: any, option: string | number): void {
  if (typeof type === 'object' && !option) {
    let cssText = ''
    for (let k in type) {
      if (type.hasOwnProperty(k)) {
        cssText+= `${k}(${type[k]})`
      }
    }
    el.style.filter = cssText
    el.style.webkitFilter = cssText
    return
  }
  el.style.filter = `${type}(${option})`
  el.style.webkitFilter = `${type}(${option})`
}

/**
 * =============================================
 * 工具类
 * =============================================
 */

/**
 * @description 浏览器提示
 * @param { object } options  参数为对象，以下都是对象内的属性配置
 * @property { String } title 浏览器提示的标题  类似标题
 * @property { String } body 浏览器提示的内容主体  类似正文
 * @property { String } icon 浏览器提示的图标用于  类似logo效果
 * @property { Function } show 浏览器提示的显示的时候执行的方法
 * @property { Function } click 浏览器提示被鼠标点击执行的方法
 * @returns { Promise } resolve(options) 浏览器可以显示
 * @returns { Promise } reject(options) 浏览器不可以显示
 * @example
 * const data = {
 *  title: 'notification',
 *  body: 'this is a test',
 *  logo: 'http://www.daiwei.org/index/images/logo/dw1.png'
 * }
 * notification(data)
 */
export function notification (options?: GenericType.INotification):Promise<any> {
  const defaultV = {
    title: '未曾遗忘的青春',
    body: 'Hello World !!!',
    icon: 'http://www.daiwei.org/index/images/logo/dw1.png',
    show: () => {},
    click: () => {}
  }
  let newOpt = Object.assign({}, defaultV, options)
  if (window.Notification && Notification.permission !== 'denied') {
    Notification.requestPermission(function() {
      let n = new Notification( newOpt.title, {
        body: newOpt.body,
        icon: newOpt.icon,
      })
      n.onshow = function() {
        newOpt.show()
      }
      n.onclick = function() {
        newOpt.click()
      }
    })
    return Promise.resolve(newOpt)
  } else {
    return Promise.reject(newOpt)
  }
}

/**
 * @description 返回rgba随机色
 * @param { Number } opacity    透明度 0～1之间
 * @return { String } rgba色值
 * @example
 * const color = randomColor(1)
 * console(color)
 */
export function randomColor (opacity: number = 1): string {
  const r = ~~(Math.random() * 256)
  const g = ~~(Math.random() * 256)
  const b = ~~(Math.random() * 256)
  return `rgba(${r},${g},${b},${opacity})`
}

/**
 * @description 显示元素的outline出现布局框架
 * @author Addy Osmani
 * @example
 * showLayoutFramework()
 */
export function  layoutFramework (): void {
  Array.from(document.querySelectorAll('*'),function(a: any){  a.style.outline='1px solid #'+(~~(Math.random()*(1<<24))).toString(16) })
}

/**
 * @description 计算字符串长度 isStrict为true的时候 返回一个字符串的长度，汉字算2个字符长度
 * @param { String } str  要计算的字符串
 * @param { Boolean } isStrict  true 返回一个字符串的长度，汉字算2个字符长度; false 直接返回长度
 * @return { Number } 返回字符串长度
 * @example
 * const str = 'd-utils库'
 * console(calcStringLength(str))
 * console(calcStringLength(str, true))
 */
export function calcStringLength (str: string, isStrict?: boolean): number {
  if (typeof str !== 'string') {
    LogUtils.logError(`str must be string but found ${typeof str}`, '[d-utils] calcStringLength error => ')
    return
  }
  if (!isStrict) return str.length

  return Array.from(str).reduce((total, current) => {
    return total += current.charCodeAt(0) > 255 ? 2 : 1
  }, 0)
}

/**
 * @description 字符串的去除空格
 * @param { String } str 操作的字符串
 * @param { Number } type 类型 0: 去除首位空格；1: 去除所有空格； 2: 去除左边空格； 3： 去除右边空格； 默认为去除首位空格
 * @return { String } 返回操作之后的字符串
 * @example
 * const str = ' d -js- ut ils '
 * // 0: 去除首尾空格 默认为0
 * strTrim(str)
 * strTrim(str, 0)
 * @example
 * // 1: 去除所有空格
 * strTrim(str, 1)
 * @example
 * // 2: 去除左边空格
 * strTrim(str, 2)
 * @example
 * // 3: 去除右边空格
 * strTrim(str, 3)
 */
export function strTrim (str: string, type: GenericType.StrTrimType = GenericType.StrTrimType.LEFT_RIGHT): string {
  if (typeof str !== 'string') {
    LogUtils.logError(`str must be string but found ${typeof str}`, '[d-utils] strTrim error => ')
    return
  }
  switch (type) {
  case 0:
    return str.replace(/(^\s*)|(\s*$)/g, '')
  case 1:
    return str.replace(/\s/g, '')
  case 2: 
    return str.replace(/(^\s*)/g, '')
  case 3:
    return str.replace(/(\s*$)/g, '')
  default:
    return str.replace(/(^\s*)|(\s*$)/g, '')
  }
}

/**
 * @description 函数节流
 * @param { Function } fn 需要节流的函数
 * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
 * @example
 * // 在鼠标resize的过程中，1秒触发一次，如果resize了10秒相当于console.log('resize')只执行了10次
 * window.onresize = throttle(function () {
 * // es5 获取参数
 * let arg = Array.prototype.slice.call(arguments)
 * // es6 获取参数
 * let arg1 = Array.from(arguments)
 * console.log('resize-throttle', arg)
 * console.log('resize-throttle', arg1)
 * }, 1000)
 */
export function throttle (fn: Function, t = 1000): any {
  if (typeof fn !== 'function') {
    LogUtils.logError(`第一个参数必须是方法`, '[d-utils] throttle error => ')
    return
  }
  const _fn = fn
  let time: any = null
  let first = true
  return function () {
    let arg = arguments
    let _this = this
    if (first) {
      _fn.apply(_this, arg)
      first = false
      return
    }
    if (time) return
    time = setTimeout(function () {
      setTimeout(time)
      time = null
      _fn.apply(_this, arg)
    }, t)
  }
}

/**
 * @description 函数防抖
 * @param { Function } fn 需要防抖的函数
 * @param { Number } t 防抖时间，多久以后才能再执行 单位ms
 * @param { Boolean } immediate true: 立刻执行方法且最后一次时间不执行, false: 等t时间之后再执行方法，如果t时间内执行，则在最后一次的t时间之后执行方法，类似动态搜索效果
 * @example
 * // 在鼠标resize的过程中，1秒以后可以被执行，如果在1秒内触发resize，则从新计算下一个一秒再允许执行
 * window.onresize = debounce(function () {
 * // es5 获取参数
 * let arg = Array.prototype.slice.call(arguments)
 * // es6 获取参数
 * let arg1 = Array.from(arguments)
 * console.log('resize-debounce', arg)
 * console.log('resize-debounce', arg1)
 * }, 1000)
 */
export function debounce (fn: Function, t: number, immediate: boolean = true): any {
  if (typeof fn !== 'function') {
    LogUtils.logError(`第一个参数必须是方法`, '[d-utils] debounce error => ')
    return
  }
  let time: any
  //  立刻执行第一次该方法
  if (immediate) {
    return function () {
      clearTimeout(time)
      if (!time) {
        fn.apply(this, arguments)
      }
      time = setTimeout(function () {
        setTimeout(time)
        time = null
      }, t)
    }
  } else {
    // 满足 time 时间结束之后自动执行一次该方法
    return function () {
      clearTimeout(time)
      time = setTimeout(function () {
        setTimeout(time)
        fn.apply(this, arguments)
        time = null
      }, t)
    }
  }
}

/**
 * @description 日期格式化 可转换成自己想要的格式
 * @param { String } fmt 格式模板 'yyyy-MM-dd hh:mm:ss'
 * @param { Date } date 日期内容  如 当前日期 new Date()
 * @return { String } '2018-08-15 01:46:22'
 * @example
 * formatDate(`yyyy-MM-dd hh:mm:ss`, new Date())
 * @example
 * formatDate(`yyyy-MM-dd`, new Date())
 */
export function formatDate (fmt: string, date: any = new Date()): any { // author: meizz
  const newDate = new Date(date)
  let o: any = {
    'M+': newDate.getMonth() + 1, // 月份
    'd+': newDate.getDate(), // 日
    'h+': newDate.getHours(), // 小时
    'm+': newDate.getMinutes(), // 分
    's+': newDate.getSeconds(), // 秒
    'q+': ~~((newDate.getMonth() + 3) / 3), // 季度
    'S': newDate.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length)) }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  }
  return fmt
}

/**
 * @description 复制网页文字到剪切板，之后可以粘贴在任何可粘贴的地方
 * @param { String } str 拷贝的内容
 * @example
 * copyCode('hello world')
 */
export function copyCode (str: string): void {
  const textArea = document.createElement('textarea')
  textArea.style.cssText = 'position: absolute; top: -1000px; right: -1000px; z-index: -1000;'
  document.body.appendChild(textArea)
  textArea.value = str
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
}

/**
 * @description 字符串转成base64编码
 * @param str 字符串
 * @return str base64 字符串
 */
export function base64Encode (str: string): string {
  return window.btoa(str)
}

/**
 * @description base64解码成字符串
 * @param str base64字符串
 * @return 返回str字符串
 */
export function base64Decode (str: string): string {
  return window.atob(decodeURIComponent(str))
}

/**
 * =============================================
 * 数据的操作存储以及数据处理
 * =============================================
 */

/**
 * @description 设置Cookie
 * @param { String } name cookie名称
 * @param { String } value cooke的值
 * @param { Number } exp 过期时间 默认2小时 单位毫秒
 * @example
 * // 设置name为test的值为12345，设置过期时间为1小时
 * setCookie('test', '12345', 60 * 60 * 1000)
 */
export function setCookie (name: string, value: string, exp: number = 60 * 60 * 2 * 1000): void {
  const date = new Date()
  date.setTime(date.getTime() + exp)
  document.cookie = `${name}=${escape(value)};expires=${date.toUTCString()}`
}

/**
 * @description 获取Cookie
 * @param { String } name cookie名称
 * @returns { (Array | Null) } 返回数据
 * @example
 * getCookie('test')
 */
export function getCookie (name?: string): string | any {
  if (name) {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
    const arr = document.cookie.match(reg)
    return arr&&arr[2] ? arr[2] : null
  }
  const getAllCookies = []
  if (document.cookie.length) {
    const arrCookie = document
                      .cookie
                      .split('; ')
    for (let k in arrCookie) {
      getAllCookies.push({
        name: `${unescape(arrCookie[k].split('=')[0])}`,
        value: `${unescape(arrCookie[k].split('=')[1])}`
      })
    }
    return getAllCookies
  } else {
    return null
  }
}

/**
 * @description 删除Cookie
 * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
 * @returns { Array } 是一个伪数组
 * @example
 * removeCookie('test')
 */
export function removeCookie (name: string): any {
  const date = new Date()
  date.setTime(date.getTime() - 1)
  if (name) {
    const cookieInfo = getCookie(name)
    if (cookieInfo !== null) {
      document.cookie = `${name}=${cookieInfo};expires=${date.toUTCString()}`
    }
    return
  }
  const allCookies = getCookie()
  for (let k in allCookies) {
    document.cookie = `${allCookies[k].name}=${allCookies[k].value};expires=${date.toUTCString()}`
  }
}

/**
 * @description 从数组中获取num 个随机不重复的元素
 * @param { Arrary } arr 数组
 * @param { Number } num 取出的数量
 * @returns { Arrary } 返回数组集合
 * @example
 * getRandomDataFromArr([1,2,3,4,5,44,3,2,1,9,0,45,678], 5)
 */
export function randomDataFromArr (arr: any[], num: number): any {
  const newArr = Array.from(new Set(arr))
  const l = newArr.length
  const resultArr = new Array()
  if (!(num > 0)) {
    LogUtils.logError(`数量必须大于0`, '[d-utils] randomDataFromArr => ')
    return
  }
  if (newArr) {
    for (let i = 0; i < (num > l ? l : num) ; i++) {
      let index = ~~(Math.random() * newArr.length)
      resultArr.push(newArr[index])
      newArr.splice(index,1)
    }
    return resultArr
  }
}

/**
 * @description 检索数据类型并返回数据类型名称 object array string undefined bool number null 等等...
 * @param { Any } data 要判断的数据
 * @example
 * checkType('1')   // string
 * @example
 * checkType({})   // object
 * @example
 * checkType([])   // array
 * @example
 * checkType(localStorage)   // storage
 */
export function checkType (data: any): string {
  let str = Object.prototype.toString.call(data)
  return str.match(/\[object (.*?)\]/)[1].toLowerCase()
}

/**
 * @description 深拷贝
 * @param { Object } obj 被拷贝的对象
 * @return { Object } 返回新的对象
 * @example
 * let a = {
 *   a: 1,
 *   b: 2,
 *   c: 3,
 *   d: [1, 2]
 * }
 * let b = deepClone(a)
 * a.d[0] = 3
 * console.log(a)
 * // a: {a: 1, b: 2, c: 3, d: [3, 2]}
 * console.log(b)
 * // b: {a: 1, b: 2, c: 3, d: [1, 2]}
 * // 此时修改a.d[0]的值， a对象变化了，b对象没有随之改变
 */
export function deepClone (obj: any): any {
  const result: any = {}
  const keys: any = Object.keys(obj)
  let type
  for (let k of keys) {
    type = checkType(obj[k])
    switch (type) {
    case 'object':
      result[k] = deepClone(obj[k])
      break
    case 'array':
      result[k] = [].concat(obj[k])
      break
    default:
      result[k] = obj[k]
    }
  }
  return result
}

/**
 * @description extend继承方法 Object.assign(...arg)的包装
 * @param { Any }   参数为object对象
 * @returns { Object } 返回一个新的对象
 * @example
 * extend({a: 1}, {a: 2})   // {a: 1}
 * ⚠️ Object.assign属于浅拷贝,为了后续的操作不影响到之前的数据,最好在extend的第一个参数设置为{}
 */
export function extend (...arg: any): any {
  return deepClone(Object.assign({}, ...arg))
}

/**
 * @description 数组去重
 * @param { Arrary } arr 要去重的arr
 * @return { Array } 返回一个新的数组，不改变原来的数组
 * @example
 * // [1, 2, 3, undefined, "4"]
 * uniqueArray([1,2,3,3,,3,3,'4',"4",'4',])
 */
export function uniqueArray (arr: any[]): any[] {
  return [...new Set(arr)]
}

/**
 * @description 文件转成blob流
 * @param { File } dataUrl  单个file
 * @return { Blob } 返回新的文件流  可以append到formdata中
 */
export function dataUrlToBlob (dataUrl: any): Blob {
  const arr = dataUrl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

/**
 * @description 返回数组之间的并集
 * @param { Array } args 可以是多个数组，数量不限制
 * @return { Array } 返回数组
 */
export function union (...args: any[]): any[] {
  return Array.from(new Set([].concat(...args)))
}

/**
 * @description 返回两个数组之间的交集
 * @param { Array } args 可以是多个数组，两个数组
 * @return { Array } 返回数组
 */
export function intersection (a: any[], b: any[]): any[] {
  const setB = new Set(b)
  return a.filter((item) => {
    return setB.has(item)
  })
}

/**
 * @description 返回两个数组之间的差集
 * @param { Array } args 可以是多个数组，两个数组
 * @return { Array } 返回数组
 */
export function diffset (a: any[], b: any[]): any[] {
  const setB = new Set(b)
  return a.filter((item) => {
    return !setB.has(item)
  })
}

/**
 * @description 判断元素在数组或者字符串里存在的次数
 * @param { Array | String } target 存在的数组或字符串
 * @param { String | Number | ... } s 目标元素  值类型的元素
 * @return { Number } 数量
 */
export function calcQuantity (target: any[] | string, s: any) {
  let newTarget = typeof target === 'string' ? target.split('') : target
  return newTarget.reduce((t, c) => {
    return s === c ? t + 1 : t
  }, 0)
}

/**
 * =============================================
 * 正则校验类
 * =============================================
 */
/**
 * @description 浏览器 信息 window.navigator.userAgent
 */
export const ua = window.navigator.userAgent

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
export function isMobile (): boolean {
  return EXP_MOBILE.test(ua)
}

/**
 * @description 正则表达式 判断是否为IOS设备
 */
export const EXP_IOS: RegExp = /(iPhone|iPad|iPod|iOS)/i

/**
 * @description 判断是否是IOS操作系统
 * @return { Boolean } 返回是否是IOS的布尔值
 * @example
 * isIOS() // false
 */
export function isIOS (): boolean {
  return EXP_IOS.test(ua)
}

/**
 * @description 判断是否是Android操作系统
 * @return { Boolean } 返回是否是Android的布尔值
 * @example
 * isAndroid() // false
 */
export function isAndroid (): boolean {
  return (!!~ua.indexOf('Android')) ||
         (!!~ua.indexOf('Adr'))
}

/**
 * @description 正则表达式 手机的合法校验 /^1[3-9]\d{9}$/
 */
export const EXP_PHONE_NUM: RegExp = /^1[3-9]\d{9}$/

/**
 * @description 判断手机格式是否正确
 * @param { String } num 手机号 字符串
 * @return { Boolean } true是有效  false无效
 * @example
 * isPhoneNum('13651971940')   // true
 */
export function isPhoneNum (num: string): boolean {
  if (typeof num !== 'string') {
    LogUtils.logError(`参数需要为string类型，但是发现为: ${typeof num}`, '[d-utils] isPhoneNum error => ')
    return false
  }
  return EXP_PHONE_NUM.test(num)
}

/**
 * @description 正则表达式 邮箱是否合法
 */
export const EXP_EMAIL: RegExp = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/

/**
 * @description 判断email格式是否正确
 * @param { String } email 邮箱名称 字符串
 * @return { Boolean } true是有效  false无效
 * @example
 * isEmail('185098535@qq.com')  // true
 */
export function isEmail (email: string): boolean {
  return EXP_EMAIL.test(email)
}

/**
 * @description 判断当前是否是微信浏览器
 * @return Boolean
 * @example
 * isWeiXin()  // true
 */
export function isWeiXin (): boolean {
  const uaLower = ua.toLowerCase()
  return String(uaLower.match(/MicroMessenger/i)) === 'micromessenger'
}

/**
 * @description 正则表达式是否全部是
 */
export const EXP_CHINESE: RegExp = /^[\u3220-\uFA29]+$/

/**
 * @description 判断字符串是否都是中文
 * @param { String } str 
 * @return Boolean
 * @example
 * isChinese('你好，世界')  // false
 * isChinese('你好')   // true
 * isChinese('world')   // false
 */
export function isChinese (str: string): boolean {
  return EXP_CHINESE.test(str)
}

/**
 * 判断是否是 Object
 */
export function isObject (o: any): boolean {
  return checkType(o) === 'object'
}

/**
  * @description 判断对象是否是空对象
  * @param { Object } 传入的对象
  * @return Boolean 是否是空对象
  * @example
  * let obj = {
  *   a: 1,
  *   b: 2
  * }
  * let obj1 = {}
  * isEmptyObject(obj)   // false
  * isEmptyObject(obj1)   // true
  */
export function isEmptyObject (obj: any): boolean {
  if (!isObject(obj)) {
    LogUtils.logError('参数不是真正的object对象', '[d-utils] isEmptyObject error => ')
    return false
  }
  return Object.keys(obj).length === 0
}

/**
 * 判断是否是空字符串  多个空格也视为空字符
 * @param str 需要校验的字符串
 * @return Boolean 是否是空字符串
 */
export function isEmptyStr (str): boolean {
  return str.replace(/(^\s*)|(\s*$)/g, '').length === 0
}

/**
 * =============================================
 * 设备相关
 * =============================================
 */
/**
 * @description 横竖屏的判断,如果是横屏幕显示,显示dom提示竖屏显示
 * @param { String } 提示内容
 * @example
 * DeviceUtils.checkLayoutOrientation() // 横屏时候提示 请旋转屏幕，以达到更好的浏览效果
 * @example
 * DeviceUtils.checkLayoutOrientation('请竖直使用手机') // 横屏时候提示 请竖直使用手机
 */
export function checkLayoutOrientation (text: string = '请旋转屏幕，以达到更好的浏览效果'): void {
  if (!window.hasOwnProperty('orientation')) return
  let ele: any = null
  // 0 和 360 的时候是竖屏
  function initOrientation () {
    const ori = window.orientation
    if (ori === 0 || ori === 360) {
      if (ele) {
        document.body.removeChild(ele)
        ele = null
      }
    } else {
      if (ele) return
      initTipInfo()
    }
  }
  function initTipInfo () {
    ele = document.createElement('div')
    ele.style.cssText = `position: fixed;
                         top: 0;
                         left: 0;
                         right:0;
                         bottom:0;
                         display:flex;
                         align-items:center;
                         justify-content:center;
                         font-size: 20px;
                         background:#fff;
                         z-index: 19940320;
                         padding: 40px;`
    ele.innerText = text
    document.body.appendChild(ele)
  }
  function initEvent () {
    window.addEventListener('orientationchange', () => {
      initOrientation()
    })
  }
  initOrientation()
  initEvent()
}

/**
  * @description 移动端REM的初始化js的方法，默认基于750的设计稿，可以限制最大显示宽度, 超出需要isFullOverMax 判断是否全屏幕显示, 不全屏则是body居中
  * @param { number }  BaseWidth   基础的设计稿宽度        默认750
  * @param { number }  MaxWidth    移动端最大的比例宽度点   默认document.body.clientWidth
  * @param { boolean } isFullOverMax   超出{MaxWidth}最大宽度的时候是否居中显示(body居中的前提是超出设定的宽度以及isFullOverMax=false) 默认false
  * @example
  * DeviceUtils.initRem()
  */
export function initRem (BaseWidth: number = 750, MaxWidth: number = document.body.clientWidth, isFullOverMax: boolean = true): void {
  const r:any = {}
  const MaxWidthP = MaxWidth / BaseWidth

  r.Html = document.getElementsByTagName('html')[0]

  r.intiFontSize = function () {
    const baseOrientation = Math.min(document.body.clientWidth, document.body.clientHeight)
    let p = parseFloat((baseOrientation / BaseWidth).toFixed(4))
    let s = p > MaxWidthP ? MaxWidthP : p
    if (isFullOverMax) s = p
    return s
  }

  r.updateFontSize = function () {
    r.Html.setAttribute('style', 'font-size:' + r.intiFontSize() * 100 + 'px')
    if (!isFullOverMax && document.body.clientWidth >= MaxWidth) {
      document.body.setAttribute('style', 'margin: 0 auto; width: 7.5rem')
    }
  }

  if (!document.addEventListener) return

  window.addEventListener('resize', r.updateFontSize, false)
  document.addEventListener('DOMContentLoaded', r.updateFontSize, false)
}

/**
 * =============================================
 * 装饰器
 * =============================================
 */

 /**
 * 装饰器，作用在类的方法上
 * 方法的 log 信息
 */
export function log (target, name, descriptor): any {
  const fn = descriptor.value;
    descriptor.value = (...args) => {
    let result
    LogUtils.groupCollapsed(`[d-utils] ${name}方法的执行信息`, LogUtils.defaultColor)
    LogUtils.logDefault(`${name}(${args})`, `方法准备执行:`)
    LogUtils.logInfo(args, '详细的参数值: ')
    try {
      result = fn.apply(target, args)
      LogUtils.logSuccess(result, `执行成功结果:`)
    } catch (err) {
      LogUtils.logError(err, `执行失败结果:`)
    }
    LogUtils.groupEnd()
  }
}

/**
 * 装饰器，作用在类的方法上
 * 方法执行时间
 */
export function fnTime (target, name, descriptor): any {
  const fn = descriptor.value
  if (typeof fn !== 'function') {
    LogUtils.logError(`${name}必须为方法`, `[d-utils] fnTime 执行失败结果: `)
    return
  }

  return {
    ...descriptor,
    value () {
      console.time(`[d-utils] ${name}方法执行时间: `);
      try {
        return fn.apply(target, arguments)
      } finally {
        console.timeEnd(`[d-utils] ${name}方法执行时间: `)
      }
    }
  }
}

/**
 * =============================================
 * Promise 相关
 * =============================================
 */

/**
 * @description 等待加载
 * @param { funciton } callback 一个停止轮训的while事件  返回值为boolean  返回true的时候则停止阻塞  开始执行后续的代码
 * @param { number } loopTime 单次轮训的时长  默认100毫秒
 * @param { number } timeout 超时的时间   默认10000毫秒  10秒
 * @return Promise
 */
export function wait (callback: () => boolean, loopTime: number = 100, timeout: number = 10000): Promise<any> {
  return new Promise((resolve, reject) => {
    if (typeof callback === 'function' && typeof callback() === 'boolean') {
      const t = setInterval(() => {
        if (callback()) {
          clearTimeout(t)
          clearTimeout(out)
          resolve()
        }
      }, loopTime)

      const out = setTimeout(() => {
        LogUtils.logError('', '[d-utils] wait timeout')
        clearTimeout(t)
        clearTimeout(out)
        reject()
      }, timeout)
    }
  })
}

/**
 * @description 加载队列的操作
 * @param { promise[] } requestQueues 一个加载队列  promise的数组
 */
export function requestOnLoad (requestQueues: Promise<any>[]): Promise<any> {
  return Promise.all(requestQueues)
}

/**
 * @description 睡眠, 阻塞代码 timer毫秒
 * @param { number } timer  睡眠时长  执行后续的操作
 * @return promise
 */
export function sleep (timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}

/**
 * @description async / await 的错误处理   通过err的条件判断或者!res 的条件判断来走后续流程
 * @param { Promise } promise
 * @return { Array }  array [0] 为err， array[1] 为data
 */
export function wrap (promise: Promise<any>) {
  return promise
          .then((res: any) => [null, res])
          .catch((err: any) => [err, null])
}


/**
 * =============================================
 * 方法 相关
 * =============================================
 */

/**
 * @description 方法的从右往左执行
 * @param { Function } fns 各种方法
 * @example
 * compose(a, b, c) // a, b, c 皆为方法
 */
export function compose (...fns: Function[]) {
  return function (x) {
    return fns.reduceRight((arg, fn) => {
      return fn(arg)
    }, x)
  }
}
