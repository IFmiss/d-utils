"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author ifmiss
 * @version 2.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
// dom操作
var index_1 = require("./domUtils/index");
// 工具类
var index_2 = require("./genericUtils/index");
// 数据存储类
var index_3 = require("./storeUtils/index");
// 验证类
var index_4 = require("./expUtils/index");
// 设备信息类
var index_5 = require("./deviceUtils/index");
// 微信相关
var index_6 = require("./weixinUtils/index");
// 性能
var index_7 = require("./performanceUtils/index");
// 打印
var index_8 = require("./logUtils/index");
// url相关
var index_9 = require("./urlUtils/index");
// http相关
var index_10 = require("./httpRequestUtils/index");
// 图片合成操作
var index_11 = require("./imageUtils/index");
exports.DomUtils = index_1.default;
exports.PerformanceUtils = index_7.default;
exports.DeviceUtils = index_5.default;
exports.StoreUtils = index_3.default;
exports.LogUtils = index_8.default;
exports.GenericUtils = index_2.default;
exports.UrlParse = index_9.default;
exports.WeixinUtils = index_6.default;
exports.ExpUtils = index_4.default;
exports.HttpRequestUtils = index_10.default;
exports.ImageUtils = index_11.default;
exports.default = {
    DomUtils: index_1.default,
    GenericUtils: index_2.default,
    StoreUtils: index_3.default,
    ExpUtils: index_4.default,
    DeviceUtils: index_5.default,
    LogUtils: index_8.default,
    WeixinUtils: index_6.default,
    PerformanceUtils: index_7.default,
    UrlParse: index_9.default,
    HttpRequestUtils: index_10.default,
    ImageUtils: index_11.default
};
