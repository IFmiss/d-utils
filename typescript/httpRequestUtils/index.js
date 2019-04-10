"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var index_1 = require("./../logUtils/index");
require('promise.prototype.finally').shim();
/**
 * 网页请求的操作
 * axios
 */
var HttpRequestUtils = /** @class */ (function () {
    function HttpRequestUtils() {
    }
    /**
     * @description 初始化axios的基础信息以及 axios的响应拦截的操作
     * @param fn
     * 方法内部有两个参数，一个是axios，另外一个是 HttpRequestUtils 的class
     * @return { class } HttpRequestUtils 返回一个构造函数
     */
    HttpRequestUtils.init = function (fn) {
        index_1.default.logInfo('https://github.com/IFmiss/d-js-utils/blob/typescript/src/lib/httpRequestUtils/axiosConfig.ts', "HttpRequestUtils.init \u9700\u8981\u81EA\u5B9A\u4E49aixos\u7684\u54CD\u5E94\u62E6\u622A\u4EE5\u53CA\u57FA\u672C\u914D\u7F6E =>");
        if (fn && typeof fn === 'function') {
            fn.call(null, axios_1.default, HttpRequestUtils);
        }
        HttpRequestUtils.isInit = true;
        return HttpRequestUtils;
    };
    /**
     * @description get的请求操作
     * @param { string } url 请求的url
     * @param { object } config 相关axios的配置信息
     * @return { Promise }
     */
    HttpRequestUtils.get = function (url, config) {
        if (!HttpRequestUtils.isInit) {
            index_1.default.logError('需要执行HttpRequestUtils.isInit()方法，才可以执行请求操作', "http-request: => error");
            return;
        }
        index_1.default.logWarning('请求开始', "http-request: [get] start => " + url);
        axios_1.default.get(url, config).then(function (res) {
            index_1.default.logSuccess(res, "http-request: [get] success => " + url);
            return Promise.resolve(res);
        }).catch(function (e) {
            index_1.default.logError(e, "http-request: [get] error => " + url);
            return Promise.reject(e);
        }).finally(function () {
            index_1.default.logInfo('请求结束', "http-request: [get] complete => " + url);
        });
    };
    /**
     * @description post的请求操作
     * @param { string } url 请求的url
     * @param { object } data 请求的参数
     * @param { object } config 相关axios的配置信息
     * @return { Promise }
     */
    HttpRequestUtils.post = function (url, data, config) {
        if (!HttpRequestUtils.isInit) {
            index_1.default.logError('需要执行HttpRequestUtils.isInit()方法，才可以执行请求操作', "http-request: => error");
            return;
        }
        var postInfo = Object.assign({}, { data: data }, config);
        index_1.default.logWarning('请求开始', "http-request: [post] start => " + url);
        axios_1.default.post(url, postInfo).then(function (res) {
            index_1.default.logSuccess(res, "http-request: [post] success => " + url);
            return Promise.resolve(res);
        }).catch(function (e) {
            index_1.default.logError(e, "http-request: [post] error => " + url);
            return Promise.reject(e);
        }).finally(function () {
            index_1.default.logInfo('请求结束', "http-request: [post] complete => " + url);
        });
    };
    /**
     * 设置默认成功的CODE码
     */
    HttpRequestUtils.successCode = 200;
    /**
     * 基础url
     */
    HttpRequestUtils.baseUrl = '';
    /**
     * timeout时长
     */
    HttpRequestUtils.timeOut = 15000;
    /**
     * 是否初始化了
     */
    HttpRequestUtils.isInit = false;
    return HttpRequestUtils;
}());
exports.default = HttpRequestUtils;
