import utils from './commonjs/index'
console.log(utils)
let file = document.getElementById('file')

utils.dom.addClass(file, 'file')
setTimeout(function () {
  utils.dom.addClass(file, ['111', '222'])
}, 1000)

setTimeout(function () {
  utils.dom.rmClass(file, ['111', '222'])
}, 2000)