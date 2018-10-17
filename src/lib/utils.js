/**
 * 工具类
 */
const utils = {
  /**
   * console的美化样式
   * @param { String } text 内容
   * @param { Object } options 配置项，大小背景，和背景颜色设置
   * @param { Boolean } options.isMax 是否是较大显示console的高度，如果console的内容较多建议设置为false 默认为小格式
   * @param { Array } options.colors 背景色列表，是一个从左向右渐变的过程
   */
  console (text = '未曾遗忘的青春', options) {
    if (options && typeof options !== 'object') throw new TypeError(`options is an object, but found ${typeof options}`)
    let data = {
      isMax: true,
      colors: ['#a18cd1', '#fbc2eb', '#8ec5fc']
    }
    let opt = Object.assign({}, data, options)
    if (opt.isMax) {
      console.log(`%c${text}`, `background-size: 100%;background-image: -moz-linear-gradient(left, ${opt.colors.toString()});background-image: -webkit-linear-gradient(left, ${opt.colors.toString()});background-image: linear-gradient(to right, ${opt.colors.toString()});padding:20px 40px;color:#fff;font-size:18px;`)
    } else {
      console.log(`%c${text}`, `background-size: 100%;background-image: -moz-linear-gradient(left, ${opt.colors.toString()});background-image: -webkit-linear-gradient(left, ${opt.colors.toString()});background-image: linear-gradient(to right, ${opt.colors.toString()});padding:2px 5px;color:#fff;font-size:12px;`)
    }
  },

  /**
   * 浏览器提示
   * @param { Object } options
   * @param { String } options.title 浏览器提示的标题  类似标题
   * @param { String } options.body 浏览器提示的内容主体  类似正文
   * @param { String } options.icon 浏览器提示的图标用于  类似logo效果
   * @param { Function } options.show 浏览器提示的显示的时候执行的方法
   * @param { Function } options.click 浏览器提示被鼠标点击执行的方法
   * @returns { Promise } resolve(options) 浏览器可以显示
   * @returns { Promise } reject(options) 浏览器不可以显示
   */
  notification (options) {
    const defaultV = {
      title: '未曾遗忘的青春',
      body: 'Hello World !!!',
      icon: 'http://www.daiwei.org/index/images/logo/dw1.png',
      show: () => {},
      click: () => {}
    }
    let newOpt = Object.assign({}, defaultV, options)
    return new Promise((resolve, reject) => {
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
        resolve(newOpt)
      } else {
        reject(newOpt)
      }
    })
  },

  /**
   * 返回rgba随机色
   * @param { Number } opacity 透明度 0～1之间
   * @return { String } rgba色值
   */
  randomColor (opacity = 1) {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgba(${r},${g},${b},${opacity})`
  },

  /**
   * 显示元素的outline出现布局框架   by  Addy Osmani
   */
  showLayoutFramework() {
    [].forEach.call( document.querySelectorAll('*'),function(a){  a.style.outline='1px solid #'+(~~(Math.random()*(1<<24))).toString(16) })
  },

  /**
   * 返回浏览器url的参数
   * @param { String } url 地址字符串
   * @return { Object } 返回一个参数对象
   */
  parseUrl (url) {
    if (!url) return
    let newUrl = url.slice(url.indexOf('?'))
    let arr = newUrl.slice(1).split('&')
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i].split('=')[0])) obj[arr[i].split('=')[0]] = arr[i].split('=')[1]
    }
    return obj
  },

  /**
   * 计算字符串长度 isStrict为true的时候 返回一个字符串的长度，汉字算2个字符长度
   * @param { String } str 要计算的字符串
   * @param { Boolean } isStrict true 返回一个字符串的长度，汉字算2个字符长度; false 直接返回长度
   * @return { Number } 返回字符串长度
   */
  calcStringLength (str, isStrict) {
    if (typeof str !== 'string') throw new TypeError (`str must be string but found ${typeof str}`)
    if (!isStrict) return str.length
    let a = 0
    for (let i = 0; i < str.length; i++ ) {
      let count = str.charCodeAt(i) > 255 ? 2 : 1
      a += count
    }
    return a
  },

  /**
   * 字符串的去除空格
   * @param { String } str 操作的字符串
   * @param { Number } type 类型 0: 去除首位空格；1: 去除所有空格； 2: 去除左边空格； 3： 去除右边空格； 默认为去除首位空格
   * @return { String } 返回操作之后的字符串
   */
  strTrim (str, type = 0) {
    if (typeof str !== 'string') throw new TypeError (`str must be string but found ${typeof str}`)
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
  },

  /**
   * 函数节流
   * @param { Function } fn 需要节流的函数
   * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
   */
  throttle (fn, t = 1000) {
    if (typeof fn !== 'function') throw new Error('第一个参数必须是方法')
    let _fn = fn
    let time = null
    let first = true
    return function () {
      let _this = this
      if (first) {
        _fn.apply(_this, arguments)
        first = false
        return
      }
      if (time) return
      time = setTimeout(function () {
        setTimeout(time)
        time = null
        _fn.apply(_this, arguments)
      }, t)
    }
  },

  /**
   * 函数防抖
   * @param { Function } fn 需要防抖的函数
   * @param { Number } t 防抖时间，多久以后才能再执行 单位ms
   */
  debounce (fn, t) {
    if (typeof fn !== 'function') throw new Error('第一个参数必须是方法')
    let time
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
  },

  /**
   * 日期格式化 可转换成自己想要的格式
   * @param { String } fmt 格式模板 'yyyy-MM-dd hh:mm:ss'
   * @param { Date } date 日期内容  如 当前日期 new Date()
   * @return { String } '2018-08-15 01:46:22'
   */
  formatDate (fmt, date) { // author: meizz
    let newDate = new Date(date)
    var o = {
      'M+': newDate.getMonth() + 1, // 月份
      'd+': newDate.getDate(), // 日
      'h+': newDate.getHours(), // 小时
      'm+': newDate.getMinutes(), // 分
      's+': newDate.getSeconds(), // 秒
      'q+': Math.floor((newDate.getMonth() + 3) / 3), // 季度
      'S': newDate.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length)) }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
    }
    return fmt
  },

  /**
   * 复制网页文字到剪切板，之后可以粘贴在任何可粘贴的地方
   * @param { String } str 
   */
  copyCode (str) {
    let textArea = document.createElement('textarea')
    textArea.style.cssText = 'position: absolute; top: -1000px; right: -1000px; z-index: -1000;'
    document.body.appendChild(textArea)
    textArea.value = str
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  },

  /**
   * 设置元素在网页中全屏
   * 兼容性支持 ie11及以上, firefox 10+, chrome 15+, safari 5.1+, opera 12.1+
   * @param { element } ele  需要全屏的元素
   */
  openFullScreen (ele) {
    if (ele.requestFullscreen) {
      ele.requestFullscreen()
    } else if (ele.mozRequestFullScreen) {
      ele.mozRequestFullScreen()
    } else if (ele.msRequestFullscreen) {
      ele.msRequestFullscreen()
    } else if (ele.webkitRequestFullscreen) {
      ele.webkitRequestFullScreen()
    }
  },

  /**
   * 关闭网页全屏操作
   */
  exitFullScreen () {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExiFullscreen()
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  }
}

export default utils