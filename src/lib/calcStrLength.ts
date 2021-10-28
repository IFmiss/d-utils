/**
 * @description 计算字符串长度 strict为true的时候 返回一个字符串的长度，汉字算2个字符长度
 * @param { String } str  要计算的字符串
 * @param { Boolean } strict  true 返回一个字符串的长度，汉字算2个字符长度; false 直接返回长度
 * @return { Number } 返回字符串长度
 * @example
 * const str = 'd-utils库'
 * console(calcStrLength(str))
 * console(calcStrLength(str, true))
 */
function calcStrLength(str: string, strict?: boolean): number {
  if (typeof str !== "string") {
    return 0;
  }

  if (!strict) return str.length;

  return Array.from(str).reduce((total, current) => {
    return (total += current.charCodeAt(0) > 255 ? 2 : 1);
  }, 0);
}

export default calcStrLength;
