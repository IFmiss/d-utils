"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.scss");
/**
 * @author ifmiss
 * @version 1.1.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
// import { DomUtils } from './../dist/lib/index'
var index_1 = require("./lib/index");
var index_2 = require("./lib/index");
var index_3 = require("./lib/index");
var index_4 = require("./lib/index");
// console.log(DomUtils)
console.log(index_1.PerformanceUtils.timing);
console.log(index_2.DeviceUtils.EXP_IOS);
console.log(index_2.DeviceUtils.isIOS());
console.log(index_2.DeviceUtils.isAndroid());
index_2.DeviceUtils.checkLayoutOrientation();
console.log(index_4.default.GenericUtils);
console.log(index_3.GenericUtils.notification);
console.log(index_3.GenericUtils.formatDate('yyyy-MM-dd', new Date()));
index_3.LogUtils.logInfo(window.screen);
index_3.LogUtils.logSuccess(window.screen);
index_3.LogUtils.logError(window.screen);
index_3.LogUtils.logWarning(111);
index_3.LogUtils.logBeauty('-----------------');
console.log(index_3.UrlParse);
console.log(index_3.WeixinUtils.plantSdkUrlIosOrAndorid());
document.getElementById('title').onclick = index_3.GenericUtils.debounce(function () {
    console.log('你点击了一次');
}, 1000);
document.getElementById('username').onclick = index_3.GenericUtils.throttle(function () {
    console.log('你点击了一次');
}, 1000);
index_3.WeixinUtils.initWxConfig({
    debug: true,
    appId: '1111',
    timestamp: '123123123',
    nonceStr: '123123123123',
    signature: '23123123',
    jsApiList: ['onMenuShareAppMessage']
});
index_3.WeixinUtils.wxShare({
    title: '111',
    desc: '2222',
    link: '44444'
}).then(function () {
    alert('success');
}).catch(function () {
    alert('error');
});
