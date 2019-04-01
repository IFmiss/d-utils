declare class PerformanceUtils {
  static timing
  static performance
  static dnsTime: () => number
  static loadTime: () => number
  static requestTime: () => number
  static tcpTime: () => number
  static renderDomTime: () => number
  static readyDomTime: () => number
  static loadAllTime: () => number
}
