/**
 * 数据操作类
 */
const store = {
  /**
   * @description 设置Cookie
   * @param { String } name cookie名称
   * @param { String } value cooke的值
   * @param { Number } exp 过期时间 默认2小时 单位毫秒
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=setcookie
   * @example
   * // 设置name为test的值为12345，设置过期时间为1小时
   * Dutils.store.setCookie('test', '12345', 60 * 60 * 1000)
   */
  setCookie (name, value, exp = 60 * 60 * 2 * 1000) {
    let date = new Date()
    date.setTime(date.getTime() + exp)
    document.cookie = `${name}=${escape(value)};expires=${date.toGMTString()}`
  },

  /**
   * @description 获取Cookie
   * @param { String } name cookie名称
   * @returns { (Array | Null) } 返回数据
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=getcookie
   * @example
   * Dutils.store.getCookie('test')
   */
  getCookie (name) {
    if (name) {
      let reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
      let arr = document.cookie.match(reg)
      return arr&&arr[2] ? arr[2] : null
    }
    let getAllCookies = []
    if (document.cookie !== '') {
      let arrCookie = document.cookie.split('; ')
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
  },

  /**
   * @description 删除Cookie
   * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=rmcookie
   * @example
   * Dutils.store.rmCookie('test')
   */
  rmCookie (name) {
    let date = new Date()
    date.setTime(date.getTime() - 1)
    if (name) {
      let cookieInfo = store.getCookie(name)
      if (cookieInfo !== null) {
        document.cookie = `${name}=${cookieInfo};expires=${date.toGMTString()}`
      }
      return
    }
    let getAllCookies = store.getCookie()
    for (let k in getAllCookies) {
      document.cookie = `${getAllCookies[k].name}=${getAllCookies[k].value};expires=${date.toGMTString()}`
    }
  },

  /**
   * @description 数据存储本地  相当于下载一个文件  该文件是需要存储的数据   的方法
   * @param { String } name 相对路径的文件名称   如 ./test.txt
   * @param { File } file 要存储的数据 类似 e.target.files[0] 这种file对象
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=savedataasfile
   * @example
   * Dutils.store.saveDataAsFile('test.txt', e.target.files[0])
   */
  saveDataAsFile (name, data) {
    let fake_click = (obj) => {  
      let ev = document.createEvent('MouseEvents')
      ev.initMouseEvent(  
        'click', true, false, window, 0, 0, 0, 0, 0  
        , false, false, false, false, 0, null  
      )
      obj.dispatchEvent(ev)
    }

    let urlObject = window.URL || window.webkitURL || window
    let export_blob = new Blob([data])
    let save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')

    save_link.href = urlObject.createObjectURL(export_blob)
    save_link.download = name
    fake_click(save_link)
  },

  /**
   * @description 将File文件转换成FormData对象
   * @param {(Object | Blob)} obj 顺带传的参数如,文件内容必传
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=filetoformdata
   * @example
   * const data = {
   *   file: e.target.files[0],
   *   name: 'd-js-utils',
   *   id: 123,
   *   desc: 'hello'
   * }
   * Dutils.store.fileToFormData(...data)
   */
  fileToFormData(obj) {
    if (typeof obj !== 'object') throw new TypeError('参数必须为对象格式且包含file文件')
    let data = new FormData()
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        data.append(k, obj[k])
      }
    }
  },

  /**
   * @description 从数组中获取num 个随机不重复的元素
   * @param { Arrary } arr 数组
   * @param { Number } num 取出的数量
   * @returns { Arrary } 返回数组集合
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=getrandomdatafromarr
   * @example
   * Dutils.store.getRandomDataFromArr([1,2,3,4,5,44,3,2,1,9,0,45,678], 5)
   */
  getRandomDataFromArr (arr, num) {
    let newNum = Number(num)
    let newArr = Array.from(new Set(arr))
    let l = newArr.length
    let resultArr = new Array()
    if (!(newNum > 0)) throw new Error('数量必须大于0')
    if (newArr) {
      for (let i = 0; i < (newNum > l ? l : newNum) ; i++) {
        let index = Math.floor(Math.random() * newArr.length)
        resultArr.push(newArr[index])
        newArr.splice(index,1)
      }
      return resultArr
    }
  },

  /**
   * @description 深拷贝
   * @param { Object } obj 被拷贝的对象
   * @return { Object } 返回新的对象
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=deepclone
   * @example
   * let a = {
   *   a: 1,
   *   b: 2,
   *   c: 3,
   *   d: [1, 2]
   * }
   * let b = Dutils.store.deepClone(a)
   * a.d[0] = 3
   * console.log(a)
   * // a: {a: 1, b: 2, c: 3, d: [3, 2]}
   * console.log(b)
   * // b: {a: 1, b: 2, c: 3, d: [1, 2]}
   * // 此时修改a.d[0]的值， a对象变化了，b对象没有随之改变
   */
  deepClone (obj) {
    let result = {}
    let keys = Object.keys(obj)
    let type
    for (let k of keys) {
      type = store.checkType(obj[k])
      switch (type) {
      case 'object':
        result[k] = store.deepClone(obj[k])
        break
      case 'array':
        result[k] = [].concat(obj[k])
        break
      default:
        result[k] = obj[k]
      }
    }
    return result
  },

  /**
   * @description 检索数据类型并返回数据类型名称 object array string undefined bool number null 等等...
   * @param { Any } data 要判断的数据
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=checktype
   * @example
   * Dutils.store.checkType('1')   // string
   * @example
   * Dutils.store.checkType({})   // object
   * @example
   * Dutils.store.checkType([])   // array
   * @example
   * Dutils.store.checkType(localStorage)   // storage
   */
  checkType (data) {
    let str = Object.prototype.toString.call(data)
    return str.substring(1, str.length - 1).split(' ')[1].toLowerCase()
  },

  /**
   * @description 数组去重
   * @param { Arrary } arr 要去重的arr
   * @return { Array } 返回一个新的数组，不改变原来的数组
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=uniquearray
   * @example
   * // [1, 2, 3, undefined, "4"]
   * Dutils.store.uniqueArray([1,2,3,3,,3,3,'4',"4",'4',])
   */
  uniqueArray (arr) {
    return Array.from(new Set(arr))
  }
}
export default store
