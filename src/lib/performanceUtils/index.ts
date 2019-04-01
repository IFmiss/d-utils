export default class PerformanceUtils {
  static performance = window.performance
  static timing = window.performance.timing
  /**
   * DNS查询耗时
   */
  static dnsTime (): number {
    return PerformanceUtils.timing.domainLookupEnd - PerformanceUtils.timing.domainLookupStart
  }

  /**
   * 白屏时间
   */
  static loadTime (): number {
    return PerformanceUtils.timing.domLoading - PerformanceUtils.timing.navigationStart
  }

  /**
   * request请求耗时
   */
  static requestTime (): number {
    return PerformanceUtils.timing.responseEnd - PerformanceUtils.timing.responseStart
  }

  /**
   * TCP链接耗时
   */
  static tcpTime (): number {
    return PerformanceUtils.timing.connectEnd - PerformanceUtils.timing.connectStart
  }

  /**
   * 解析dom树耗时
   */
  static renderDomTime (): number {
    return PerformanceUtils.timing.domComplete - PerformanceUtils.timing.domInteractive
  }

  /**
   * domready时间(用户可操作时间节点)
   */
  static readyDomTime (): number {
    return PerformanceUtils.timing.domContentLoadedEventEnd - PerformanceUtils.timing.navigationStart
  }

  /**
   * onload时间(总下载时间)
   */
  static loadAllTime (): number {
    return PerformanceUtils.timing.loadEventEnd - PerformanceUtils.timing.navigationStart
  }
}