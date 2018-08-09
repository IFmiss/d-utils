import utils from './lib/index'
// import './style.scss'
console.log(utils)
let file = document.getElementById('file')

utils.dom.addClass(file, 'file')
setTimeout(function () {
  utils.dom.addClass(file, ['111', '222'])
}, 1000)

setTimeout(function () {
  utils.dom.rmClass(file, ['111', '222'])
}, 2000)

utils.utils.console(utils.store.getRandomDataFromArr([1,2,3,4,5,6,7,8,9,0,3,3,3333,4,24,2,5,2], 8), false)

// utils.utils.notification({
//   title: '你好',
//   body: 'this is a test',
//   show: function () {
//     console.log('显示了')
//   },
//   click: function () {
//     console.log('点击了')
//   }
// })

// console.log(utils.utils.parseUrl('www.daiwei.org?id=1'))
// console.log(utils.utils.parseUrl('www.daiwei.org?id=1&name=daiwei'))

// utils.store.setCookie('name', 'daiwei', 30 * 60 * 60 * 1000)

// console.log(utils.store.getCookie('name'))

// setTimeout(function () {
//   utils.store.rmCookie('name')
// }, 10000)
// utils.utils.showLayoutFramework()

let str = ' a bsc d e f '
console.log(utils.utils.strTrim(str, 0))
console.log(utils.utils.strTrim(str, 1))
console.log(utils.utils.strTrim(str, 2))
console.log(utils.utils.strTrim(str, 3))

window.onresize = utils.utils.throttle(function () {
  console.log('resize')
}, 200)