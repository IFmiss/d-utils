"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author ifmiss
 * @version 2.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
const index_1 = require("./domUtils/index");
// 工具类
const index_2 = require("./genericUtils/index");
// 数据存储类
const index_3 = require("./storeUtils/index");
// 验证类
const index_4 = require("./expUtils/index");
// 设备信息类
const index_5 = require("./deviceUtils/index");
// 微信相关
const index_6 = require("./weixinUtils/index");
// 性能
const index_7 = require("./performanceUtils/index");
// 打印
const index_8 = require("./logUtils/index");
// url相关
const index_9 = require("./urlUtils/index");
// http相关
const index_10 = require("./httpRequestUtils/index");
// 图片合成操作
const index_11 = require("./imageUtils/index");
// event事件
const index_12 = require("./eventUtils/index");
// promise
const index_13 = require("./promiseUtils/index");
/**
 * Dom相关静态类
 */
exports.DomUtils = index_1.default;
/**
 * 性能相关静态类
 */
exports.PerformanceUtils = index_7.default;
/**
 * 设备相关静态类
 */
exports.DeviceUtils = index_5.default;
/**
 * 数据存储静态类
 */
exports.StoreUtils = index_3.default;
/**
 * 日志 打印静态类
 */
exports.LogUtils = index_8.default;
/**
 * 通用工具静态类
 */
exports.GenericUtils = index_2.default;
/**
 * url相关
 */
exports.UrlUtils = index_9.default;
/**
 * 微信相关
 */
exports.WeixinUtils = index_6.default;
/**
 * 正则相关静态类
 */
exports.ExpUtils = index_4.default;
/**
 * axios二次封装
 */
exports.HttpRequestUtils = index_10.default;
/**
 * 图片合成类
 */
exports.ImageUtils = index_11.default;
/**
 * 事件相关
 */
exports.EventUtils = index_12.default;
/**
 * promise相关
 */
exports.PromiseUtils = index_13.default;
// export default {
//   DecoratorUtils: decorator,
//   DeviceUtils: device,
//   DomUtils: dom,
//   GenericUtils: utils,
//   StoreUtils: store,
//   ExpUtils: exp,
//   LogUtils: log,
//   WeixinUtils: weixin,
//   PerformanceUtils: performance,
//   UrlUtils: url,
//   HttpRequestUtils: http,
//   ImageUtils: img,
//   EventUtils: event,
//   PromiseUtils: promise
// }
