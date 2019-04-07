"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PerformanceUtils = /** @class */ (function () {
    function PerformanceUtils() {
    }
    /**
     * @description window.performance对象
     */
    PerformanceUtils.performance = window.performance;
    /**
     * @description window.performance.timing对象
     */
    PerformanceUtils.timing = window.performance.timing;
    /**
     * @description DNS查询耗时
     * @description timing.domainLookupEnd - timing.domainLookupStart
     * @returns { number } 时差 单位：ms
     */
    PerformanceUtils.dnsTime = function () {
        return PerformanceUtils.timing.domainLookupEnd - PerformanceUtils.timing.domainLookupStart;
    };
    /**
     * @description 白屏时间
     * @description timing.domLoading - timing.navigationStart
     * @returns { number } 时差 单位：ms
     */
    PerformanceUtils.loadTime = function () {
        return PerformanceUtils.timing.domLoading - PerformanceUtils.timing.navigationStart;
    };
    /**
     * @description request请求耗时
     * @description timing.responseEnd - timing.responseStart
     * @returns { number } 时差 单位：ms
     */
    PerformanceUtils.requestTime = function () {
        return PerformanceUtils.timing.responseEnd - PerformanceUtils.timing.responseStart;
    };
    /**
     * @description TCP链接耗时
     * @description timing.connectEnd - timing.connectStart
     * @returns { number } 时差 单位：ms
     */
    PerformanceUtils.tcpTime = function () {
        return PerformanceUtils.timing.connectEnd - PerformanceUtils.timing.connectStart;
    };
    /**
     * @description 解析dom树耗时
     * @description timing.domComplete - timing.domInteractive
     * @returns { number } 时差 单位：ms
     */
    PerformanceUtils.renderDomTime = function () {
        return PerformanceUtils.timing.domComplete - PerformanceUtils.timing.domInteractive;
    };
    /**
     * @description domready时间(用户可操作时间节点)
     * @description timing.domContentLoadedEventEnd - timing.navigationStart
     * @returns { number } 时差 单位：ms
     */
    PerformanceUtils.readyDomTime = function () {
        return PerformanceUtils.timing.domContentLoadedEventEnd - PerformanceUtils.timing.navigationStart;
    };
    /**
     * @description onload时间(总下载时间)
     * @description timing.loadEventEnd - timing.navigationStart
     * @returns { number } 时差 单位：ms
     */
    PerformanceUtils.loadFullTime = function () {
        return PerformanceUtils.timing.loadEventEnd - PerformanceUtils.timing.navigationStart;
    };
    return PerformanceUtils;
}());
exports.default = PerformanceUtils;
