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
import Dutils from './lib/index'
import DomUtils from './lib/domUtils';
import PromiseSelf from './lib/PromiseSelf';
import { rejects } from 'assert';
PerformanceUtils.logger()
HttpRequestUtils.init(function () {
  console.log('init')
})
HttpRequestUtils.get('http://www.daiwei.org/vue/server/home.php', {
  inAjax: 1,
  do: 'getImageByBingJson'
})

let t = 0
setTimeout(() => {
  t = 1
}, 5000)

async function aaa () {
  console.log('start')
  await PromiseUtils.wait(() => {
    return t > 0
  }, 1000, 10000).then(() => {
    console.log('end')
  }).catch(() => {
    console.log('time out')
  })
  console.log('哈哈哈哈啊哈哈哈哈')
}
aaa()

DeviceUtils.checkLayoutOrientation()
GenericUtils.calcStringLength('1111')

async function bbb () {
  await PromiseUtils.sleep(5000)
  console.log('bbbbbbbbbbbbbbbbbb')
} 
bbb()

DomUtils.cssFilter(document.body, 'grayscale', '1')

console.log(GenericUtils.base64Encode('hello world!'))
console.log(GenericUtils.base64Decode('aGVsbG8gd29ybGQh'))

// const promiseS = new PromiseSelf((reslove, reject) => {
//   console.log('start reslove')
//   setTimeout(() => {
//     reject(100)
//   }, 3000)
// })

const PromiseS1 = new PromiseSelf((resolve, reject) => {
  console.log('this is PromiseS1')
  resolve('PromiseS1')
})

const PromiseS2 = new PromiseSelf((resolve, reject) => {
  console.log('this is PromiseS2')
  resolve('PromiseS2')
})

const PromiseS3 = PromiseSelf.reject('失败')

PromiseSelf.all([PromiseS3, PromiseS1, PromiseS2]).then((res) => {
  console.log('Promise.all', res);
})

// PromiseSelf.race([PromiseS3, PromiseS2, PromiseS1]).then((res) => {
//   console.log('Promise.race', res);
// })

// console.log(promiseS)

// promiseS.then().then((res) => {
//   console.log('next onFulfilled', res)
//   return res
// }).catch((e) => {
//   console.log('catch', e)
// })
