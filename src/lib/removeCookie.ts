import getCookie from "./getCookie"

/**
 * @description 删除Cookie
 * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
 * @returns { Array } 是一个伪数组
 * @example
 * removeCookie('test')
 */
function removeCookie (name: string): any {
  const date = new Date()
  date.setTime(date.getTime() - 1)
  if (name) {
    const cookieInfo = getCookie(name)
    if (cookieInfo !== null) {
      document.cookie = `${name}=${cookieInfo};expires=${date.toUTCString()}`
    }
    return
  }
  const allCookies = getCookie()
  for (let k in allCookies) {
    document.cookie = `${allCookies[k].name}=${allCookies[k].value};expires=${date.toUTCString()}`
  }
}

export default removeCookie
