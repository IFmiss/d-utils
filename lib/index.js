"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author ifmiss
 * @version 1.1.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
var index_1 = require("./domUtils/index");
// 工具类
var index_2 = require("./genericUtils/index");
// 数据存储类
var index_3 = require("./storeUtils/index");
// 验证类
// import exp from './exp'
// 设备信息类
var index_4 = require("./deviceUtils/index");
// 微信相关
var index_5 = require("./weixinUtils/index");
// 性能
var index_6 = require("./performanceUtils/index");
// 打印
var index_7 = require("./logUtils/index");
// url相关
var index_8 = require("./urlUtils/index");
exports.DomUtils = index_1.default;
exports.PerformanceUtils = index_6.default;
exports.DeviceUtils = index_4.default;
exports.StoreUtils = index_3.default;
exports.LogUtils = index_7.default;
exports.GenericUtils = index_2.default;
exports.UrlParse = index_8.default;
exports.WeixinUtils = index_5.default;
exports.default = {
    DomUtils: index_1.default,
    GenericUtils: index_2.default,
    StoreUtils: index_3.default,
    // exp,
    DeviceUtils: index_4.default,
    LogUtils: index_7.default,
    WeixinUtils: index_5.default,
    PerformanceUtils: index_6.default,
    UrlParse: index_8.default
};
