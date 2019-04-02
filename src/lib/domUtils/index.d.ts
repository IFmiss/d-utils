declare class DomUtils {
  static hasClass: (el: any, className: string) => boolean
  static addClass: (el: any, className: string) => void
  static removeClass: (el: any, className: string) => void
  static getComputedStyle: (el: any, cssProp: any) => string | any
  static cssFilter: (el: any, type: any, option: string | number) => void
}
