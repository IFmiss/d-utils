/**
 * url的操作，浏览器相关
 */

/**
 * 获取url地址的参数信转化成键值对的对象格式
 * @param { string } url 解析的url地址
 * @example
 * UrlUtils.parseUrl('http://www.daiwei.org/?a=1&b=2')
 */
export function parseUrl (url: string = window.location.href): any {
  const newUrl: string = url.slice(url.indexOf('?'))
  const arr: any[] = newUrl.slice(1).split('&')
  const obj: any = {}
  arr.forEach(item => {
    if (item.split('=')[0]) obj[item.split('=')[0]] = item.split('=')[1]
  })
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
  const props = Object.keys(obj)
  if (props && !props.length) return ''
  if (props.length > 1) {
    return Object.keys(obj).reduce((prevAll, currentItem, index) => {
      const prev = index === 1 ? `${prevAll}=${obj[prevAll]}` : prevAll
      const current = `${currentItem}=${obj[currentItem]}`
      return `${prev}&${current}`
    })
  }
  return `${props[0]}=${obj[props[0]]}`
}
