/**
 * @description 正则表达式是否全部是
 */
export const EXP_CHINESE: RegExp = /^[\u3220-\uFA29]+$/;

/**
 * @description 判断字符串是否都是中文
 * @param { String } str
 * @return Boolean
 * @example
 * isChinese('你好，世界')  // false
 * isChinese('你好')   // true
 * isChinese('world')   // false
 */
function isChinese(str: string): boolean {
  return EXP_CHINESE.test(str);
}

export default isChinese;
