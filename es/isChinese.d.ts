/**
 * @description 正则表达式是否全部是
 */
export declare const EXP_CHINESE: RegExp;
/**
 * @description 判断字符串是否都是中文
 * @param { String } str
 * @return Boolean
 * @example
 * isChinese('你好，世界')  // false
 * isChinese('你好')   // true
 * isChinese('world')   // false
 */
declare function isChinese(str: string): boolean;
export default isChinese;
