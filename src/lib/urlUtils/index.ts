/**
 * url的操作，浏览器相关
 */
export default class UrlUtils {
  /**
   * 获取url地址的参数信转化成键值对的对象格式
   * @param { string } url 解析的url地址
   * @example
   * UrlUtils.parseUrl('http://www.daiwei.org/?a=1&b=2')
   */
  static parseUrl (url: string = window.location.href): any {
    const newUrl: string = url.slice(url.indexOf('?'))
    const arr: any[] = newUrl.slice(1).split('&')
    const obj: any = {}
    arr.forEach(item => {
      if (item.split('=')[0]) obj[item.split('=')[0]] = item.split('=')[1]
    })
    return obj
  }
}
