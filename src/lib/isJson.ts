/**
 * 判断是否是JSON字符串
 * @param str 需要校验的字符串
 * @return Boolean 是否是JSON格式的字符串
 */
function isJson (str: string): boolean {
  try {
    if (typeof JSON.parse(str) == "object") {
      return true;
    }
    return false
  } catch (e) {
    return false
  }
}

export default isJson
