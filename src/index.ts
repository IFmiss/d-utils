import './style.less'
/**
 * @author ifmiss
 * @version 1.1.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
// import { DomUtils } from './../dist/lib/index'
// import EventUtils from './lib/eventUtils/index'
import { DeviceUtils } from './lib/index'
import { StoreUtils } from './lib/index'
import { LogUtils, GenericUtils, UrlUtils, WeixinUtils, ExpUtils, HttpRequestUtils, ImageUtils, PerformanceUtils, PromiseUtils } from './lib/index'
import { axiosConfig } from './lib/httpRequestUtils/axiosConfig'
import * as Dutils from './lib/index'
import * as DomUtils from './lib/domUtils';
import { rejects } from 'assert';
import EventUtils from './lib/eventUtils';
EventUtils.on('axios-loading', (res) => {
  alert(1)
})
PerformanceUtils.logger()
HttpRequestUtils.init(axiosConfig)
HttpRequestUtils.get('http://www.daiwei.org/vue/server/home.php', {
  inAjax: 1,
  do: 'getImageByBingJson'
})

let t = 0
setTimeout(() => {
  t = 1
}, 5000)

const log = function (e) {
  console.log('clickHandler', e)
}

const clickHandler = GenericUtils.debounce(function (e) {
  log(e)
}, 1000)

document.getElementById('disc').onclick = clickHandler

async function aaa () {
  console.log('start')
  // const [err, res] = await PromiseUtils.wrap(PromiseUtils.wait(() => {
  //   console.log('t', t)
  //   return t > 0
  // }, 1000, 500).then(() => {
  //   console.log('end')
  // }).catch(e => {
  //   console.log(e)
  // }))
  // console.log(err, res)
  await PromiseUtils.sleep(3000)
  const [err, res] = await PromiseUtils.wrap(HttpRequestUtils.get('http://www.daiwei.org/vue/server/home.php', {
    inAjax: 1,
    do: 'getImageByBingJson'
  }))
  console.log(err, res)
  console.log('this is realy end')
}
aaa()


DeviceUtils.initRem()
DeviceUtils.checkLayoutOrientation()
console.log('-----------------------')
console.log(GenericUtils.calcStringLength('♋☮✌☏1{', true))

async function bbb () {
  await PromiseUtils.sleep(5000)
  console.log('bbbbbbbbbbbbbbbbbb')
} 
bbb()

DomUtils.cssFilter(document.body, 'grayscale', '1')

console.log(GenericUtils.base64Encode('hello world!'))
console.log(GenericUtils.base64Decode('aGVsbG8gd29ybGQh'))

WeixinUtils.initWxConfig({
  appId: '11111',
  timestamp: new Date().getTime(),
  nonceStr: '11111',
  signature: '111111',
  jsApiList: ['hideMenuItems', 'showMenuItems']
})


let Person = {
  name: 'Tom',
  say (self = '1111', other) {
    console.log('Person.say')
    console.log(`我叫${this.name}---${self}---${other}`)
  }
}
// Person.say()

let Student = {
  firstName: 'dai',
  lastName: 'wei',
  getName () {
    console.log(`FullName: ${this.firstName} -- ${this.lastName}`)
  }
}

let Person1 = {
  name: 'Tom 1',
  firstName: 'd',
  lastName: 'w',
}


LogUtils.logDefault(UrlUtils.stringifyUrl({a: 1}))
LogUtils.logDefault(UrlUtils.stringifyUrl({}))
LogUtils.logDefault(UrlUtils.stringifyUrl({a: 1, b: '2'}))
LogUtils.logDefault(UrlUtils.stringifyUrl({a: 1, b: '2', c: 3, d: 'c'}))
LogUtils.logDefault(UrlUtils.stringifyUrl({a: 1, b: '2', c: 3, d: 'c', e: 'f'}))

LogUtils.logDefault(UrlUtils.parseUrl('http://www.daiwei.org/?a=1&b=2&url=a.html?b=1&c=1'))

LogUtils.logInfo(UrlUtils.deleteUrlParam(['code', 'name']))

LogUtils.logInfo(StoreUtils.uniqueArray([1, 2, 3, 4, 5, 3, 2, 1, 0]))

LogUtils.logInfo(GenericUtils.strTrim(' asda '))

// GenericUtils.notification()
