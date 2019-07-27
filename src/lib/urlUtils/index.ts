/**
 * url的操作，浏览器相关
 */

/**
 * 获取url地址的参数信转化成键值对的对象格式
 * @param { string } url 解析的url地址
 * @example
 * UrlUtils.parseUrl('http://www.daiwei.org/?a=1&b=2')
 */
export function parseUrl (url: string = window.location.search): any {
  const newUrl: string = url.slice(url.indexOf('?'))
  const sp = new URLSearchParams(newUrl)
  const obj = {}
  for (let [k, v] of sp.entries()) {
    obj[k] = v
  }
  return obj
}

/**
 * @description object对象转化成get请求的字符串形式
 * @param { Object } obj  需要操作的对象
 * @return { String } 返回一个字符串 a=1&b=2
 * @example
 * // 'a=1&b=2'
 * UrlUtils.stringifyUrl({a: 1, b: 2})
 */
export function stringifyUrl (obj: object): string {
  const arr = Object.entries(obj)
  return arr.map(item => {
    let [k, v] = [...item]
    return `${k}=${encodeURIComponent(v)}`
  }).join('&')
}
