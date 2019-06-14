"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 网页性能监测
 */
const index_1 = require("./../logUtils/index");
class PerformanceUtils {
    /**
     * @description DNS查询耗时
     * @description timing.domainLookupEnd - timing.domainLookupStart
     * @returns { number } 时差 单位：ms
     */
    static dnsTime() {
        return PerformanceUtils.timing.domainLookupEnd - PerformanceUtils.timing.domainLookupStart;
    }
    /**
     * @description 白屏时间
     * @description timing.domLoading - timing.navigationStart
     * @returns { number } 时差 单位：ms
     */
    static loadTime() {
        return PerformanceUtils.timing.domLoading - PerformanceUtils.timing.navigationStart;
    }
    /**
     * @description request请求耗时
     * @description timing.responseEnd - timing.responseStart
     * @returns { number } 时差 单位：ms
     */
    static requestTime() {
        return PerformanceUtils.timing.responseEnd - PerformanceUtils.timing.responseStart;
    }
    /**
     * @description TCP链接耗时
     * @description timing.connectEnd - timing.connectStart
     * @returns { number } 时差 单位：ms
     */
    static tcpTime() {
        return PerformanceUtils.timing.connectEnd - PerformanceUtils.timing.connectStart;
    }
    /**
     * @description 解析dom树耗时
     * @description timing.domComplete - timing.domInteractive
     * @returns { number } 时差 单位：ms
     */
    static renderDomTime() {
        return PerformanceUtils.timing.domComplete - PerformanceUtils.timing.domInteractive;
    }
    /**
     * @description domready时间(用户可操作时间节点)
     * @description timing.domContentLoadedEventEnd - timing.navigationStart
     * @returns { number } 时差 单位：ms
     */
    static readyDomTime() {
        return PerformanceUtils.timing.domContentLoadedEventEnd - PerformanceUtils.timing.navigationStart;
    }
    /**
     * @description onload时间(总下载时间)
     * @description timing.loadEventEnd - timing.navigationStart
     * @returns { number } 时差 单位：ms
     */
    static loadFullTime() {
        return PerformanceUtils.timing.loadEventEnd - PerformanceUtils.timing.navigationStart;
    }
    /**
     * @description 打印已知的所有数据信息
     */
    static logger() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                index_1.default.groupCollapsed('[d-utils] PerformanceUtils logger', index_1.default.infoColor);
                index_1.default.logDefault(PerformanceUtils.dnsTime(), 'DNS查询耗时');
                index_1.default.logDefault(PerformanceUtils.loadTime(), '白屏时间');
                index_1.default.logDefault(PerformanceUtils.requestTime(), 'request请求耗时');
                index_1.default.logDefault(PerformanceUtils.tcpTime(), 'TCP链接耗时');
                index_1.default.logDefault(PerformanceUtils.renderDomTime(), '解析dom树耗时');
                index_1.default.logDefault(PerformanceUtils.readyDomTime(), '用户可操作时间节点');
                index_1.default.logDefault(PerformanceUtils.loadFullTime(), 'onload时间');
                index_1.default.groupEnd();
            }, 300);
        });
    }
}
/**
 * @description window.performance对象
 */
PerformanceUtils.performance = window.performance;
/**
 * @description window.performance.timing对象
 */
PerformanceUtils.timing = window.performance.timing;
exports.default = PerformanceUtils;
