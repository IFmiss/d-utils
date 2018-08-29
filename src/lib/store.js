/**
 * 数据操作类
 */
const store = {
  /**
   * 设置Cookie
   * @param { String } name cookie名称
   * @param { String } value cooke的值
   * @param { Number } exp 过期时间 默认2小时 单位毫秒
   */
  setCookie (name, value, exp = 60 * 60 * 2 * 1000) {
    let date = new Date()
    date.setTime(date.getTime() + exp)
    document.cookie = `${name}=${escape(value)};expires=${date.toGMTString()}`
  },

  /**
   * 获取Cookie
   * @param { String } name cookie名称
   * @returns { (Array | Null) } 返回数据
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
   * 删除Cookie
   * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
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
   * 数据存储本地  相当于下载一个文件  该文件是需要存储的数据   的方法
   * @param { String } name 相对路径的文件名称   如 ./test.txt
   * @param { File } file 要存储的数据 类似 e.target.files[0] 这种file对象
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
   * 将File文件转换成FormData对象
   * @param {(Object|Blob)} obj 顺带传的参数如,文件内容必传
   * 如：{file: e.target.files[0], id: '100001', name: 'hello world'}
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
   * 从数组中获取num 个随机不重复的元素
   * @param { Arrary } arr 数组
   * @param { Number } num 数量
   * @returns { Arrary } 返回数组集合
   */
  getRandomDataFromArr (arr, num) {
    let newNum = Number(num)
    let newArr = Array.from(new Set(arr))
    let resultArr = new Array()
    if (!(newNum > 0)) throw new Error('数量必须大于0')
    if (newArr && newArr.length > newNum) {
      for (let i = 0; i < newNum; i++) {
        let index = Math.floor(Math.random() * newArr.length)
        resultArr.push(newArr[index])
        newArr.splice(index,1)
      }
      return resultArr
    }
    throw new Error(`数组中没有超过${num}个不同的元素`)
  },

  /**
   * 深拷贝
   * @param { Object } obj 被拷贝的对象
   * @return { Object } 返回新的对象
   */
  deepClone (obj) {
    return JSON.parse(JSON.stringify(obj))
  },

  /**
   * 检索数据类型并返回数据类型名称 object array string undefined bool number null 等等...
   * @param { Any } data 要判断的数据
   */
  checkType (data) {
    let str = Object.prototype.toString.call(data)
    return str.substring(1, str.length - 1).split(' ')[1].toLowerCase()
  }
}
export default store
