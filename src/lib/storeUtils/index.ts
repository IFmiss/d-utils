import LogUtils from './../logUtils/index'
/**
 * 数据的操作存储以及数据处理
 */
export default class StoreUtils {
  /**
   * @description 设置Cookie
   * @param { String } name cookie名称
   * @param { String } value cooke的值
   * @param { Number } exp 过期时间 默认2小时 单位毫秒
   * @example
   * // 设置name为test的值为12345，设置过期时间为1小时
   * StoreUtils.setCookie('test', '12345', 60 * 60 * 1000)
   */
  static setCookie (name: string, value: string, exp: number = 60 * 60 * 2 * 1000): void {
    const date = new Date()
    date.setTime(date.getTime() + exp)
    document.cookie = `${name}=${escape(value)};expires=${date.toUTCString()}`
  }

  /**
   * @description 获取Cookie
   * @param { String } name cookie名称
   * @returns { (Array | Null) } 返回数据
   * @example
   * StoreUtils.getCookie('test')
   */
  static getCookie (name?: string): string | any {
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
   * StoreUtils.removeCookie('test')
   */
  static removeCookie (name: string): any {
    const date = new Date()
    date.setTime(date.getTime() - 1)
    if (name) {
      const cookieInfo = StoreUtils.getCookie(name)
      if (cookieInfo !== null) {
        document.cookie = `${name}=${cookieInfo};expires=${date.toUTCString()}`
      }
      return
    }
    const allCookies = StoreUtils.getCookie()
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
   * StoreUtils.getRandomDataFromArr([1,2,3,4,5,44,3,2,1,9,0,45,678], 5)
   */
  static randomDataFromArr (arr: any[], num: number): any {
    const newArr = Array.from(new Set(arr))
    const l = newArr.length
    const resultArr = new Array()
    if (!(num > 0)) {
      LogUtils.logError(`数量必须大于0`, 'StoreUtils.randomDataFromArr => error')
      return
    }
    if (newArr) {
      for (let i = 0; i < (num > l ? l : num) ; i++) {
        let index = Math.floor(Math.random() * newArr.length)
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
   * StoreUtils.checkType('1')   // string
   * @example
   * StoreUtils.checkType({})   // object
   * @example
   * StoreUtils.checkType([])   // array
   * @example
   * StoreUtils.checkType(localStorage)   // storage
   */
  static checkType (data: any): string {
    let str = Object.prototype.toString.call(data)
    return str
           .substring(1, str.length - 1)
           .split(' ')[1]
           .toLowerCase()
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
   * let b = StoreUtils.deepClone(a)
   * a.d[0] = 3
   * console.log(a)
   * // a: {a: 1, b: 2, c: 3, d: [3, 2]}
   * console.log(b)
   * // b: {a: 1, b: 2, c: 3, d: [1, 2]}
   * // 此时修改a.d[0]的值， a对象变化了，b对象没有随之改变
   */
  static deepClone (obj: any): any {
    const result: any = {}
    const keys: any = Object.keys(obj)
    let type
    for (let k of keys) {
      type = StoreUtils.checkType(obj[k])
      switch (type) {
      case 'object':
        result[k] = StoreUtils.deepClone(obj[k])
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
   * StoreUtils.extend({a: 1}, {a: 2})   // {a: 1}
   * ⚠️ Object.assign属于浅拷贝,为了后续的操作不影响到之前的数据,最好在extend的第一个参数设置为{}
   */
  static extend (...arg: any): any {
    return StoreUtils.deepClone(Object.assign({}, ...arg))
  }

  /**
   * @description 数组去重
   * @param { Arrary } arr 要去重的arr
   * @return { Array } 返回一个新的数组，不改变原来的数组
   * @example
   * // [1, 2, 3, undefined, "4"]
   * StoreUtils.uniqueArray([1,2,3,3,,3,3,'4',"4",'4',])
   */
  static uniqueArray (arr: any[]): any[] {
    return Array.from(new Set(arr))
  }

  /**
   * @description object对象转化成get请求的字符串形式
   * @param { Object } obj  需要操作的对象
   * @return { String } 返回一个字符串 a=1&b=2
   * @example
   * // 'a=1&b=2'
   * StoreUtils.objectToString({a: 1, b: 2})
   */
  static objectToString (obj: any): any {
    return Object.keys(obj).reduce((prevAll, currentItem, index) => {
      const prev = index > 1 ? prevAll :`${prevAll}=${obj[prevAll]}`
      const current = `${currentItem}=${obj[currentItem]}`
      return `${prev}&${current}`
    })
  }
}
