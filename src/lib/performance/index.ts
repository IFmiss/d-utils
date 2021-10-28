/**
 * 网页性能监测
 */
import Log from "./../log/index";

export default class PerformanceUtils {
  /**
   * @description window.performance对象
   */
  static performance = window.performance;

  /**
   * @description window.performance.timing对象
   */
  static timing = window.performance.timing;

  /**
   * @description DNS查询耗时
   * @description timing.domainLookupEnd - timing.domainLookupStart
   * @returns { number } 时差 单位：ms
   */
  static dnsTime(): number {
    return (
      PerformanceUtils.timing.domainLookupEnd -
      PerformanceUtils.timing.domainLookupStart
    );
  }

  /**
   * @description 白屏时间
   * @description timing.domLoading - timing.navigationStart
   * @returns { number } 时差 单位：ms
   */
  static loadTime(): number {
    return (
      PerformanceUtils.timing.domLoading -
      PerformanceUtils.timing.navigationStart
    );
  }

  /**
   * @description request请求耗时
   * @description timing.responseEnd - timing.responseStart
   * @returns { number } 时差 单位：ms
   */
  static requestTime(): number {
    return (
      PerformanceUtils.timing.responseEnd -
      PerformanceUtils.timing.responseStart
    );
  }

  /**
   * @description TCP链接耗时
   * @description timing.connectEnd - timing.connectStart
   * @returns { number } 时差 单位：ms
   */
  static tcpTime(): number {
    return (
      PerformanceUtils.timing.connectEnd - PerformanceUtils.timing.connectStart
    );
  }

  /**
   * @description 解析dom树耗时
   * @description timing.domComplete - timing.domInteractive
   * @returns { number } 时差 单位：ms
   */
  static renderDomTime(): number {
    return (
      PerformanceUtils.timing.domComplete -
      PerformanceUtils.timing.domInteractive
    );
  }

  /**
   * @description domready时间(用户可操作时间节点)
   * @description timing.domContentLoadedEventEnd - timing.navigationStart
   * @returns { number } 时差 单位：ms
   */
  static readyDomTime(): number {
    return (
      PerformanceUtils.timing.domContentLoadedEventEnd -
      PerformanceUtils.timing.navigationStart
    );
  }

  /**
   * @description onload时间(总下载时间)
   * @description timing.loadEventEnd - timing.navigationStart
   * @returns { number } 时差 单位：ms
   */
  static loadFullTime(): number {
    return (
      PerformanceUtils.timing.loadEventEnd -
      PerformanceUtils.timing.navigationStart
    );
  }

  /**
   * @description 打印已知的所有数据信息
   */
  static logger(): void {
    window.addEventListener("load", () => {
      setTimeout(() => {
        Log.group("[d-utils] PerformanceUtils logger - list: ", Log.infoColor);
        Log.default(PerformanceUtils.dnsTime(), "DNS查询耗时");
        Log.default(PerformanceUtils.loadTime(), "白屏时间");
        Log.default(PerformanceUtils.requestTime(), "request请求耗时");
        Log.default(PerformanceUtils.tcpTime(), "TCP链接耗时");
        Log.default(PerformanceUtils.renderDomTime(), "解析dom树耗时");
        Log.default(PerformanceUtils.readyDomTime(), "用户可操作时间节点");
        Log.default(PerformanceUtils.loadFullTime(), "onload时间");
        Log.groupEnd();
      }, 300);
    });
  }
}
