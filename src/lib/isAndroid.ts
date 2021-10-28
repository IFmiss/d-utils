/**
 * @description 判断是否是Android操作系统
 * @return { Boolean } 返回是否是Android的布尔值
 * @example
 * isAndroid() // false
 */
function isAndroid(): boolean {
  const ua = window.navigator.userAgent;
  return !!~ua.indexOf("Android") || !!~ua.indexOf("Adr");
}

export default isAndroid;
