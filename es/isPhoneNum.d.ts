/**
 * @description 正则表达式 手机的合法校验 /^1[3-9]\d{9}$/
 */
export declare const EXP_PHONE_NUM: RegExp;
/**
 * @description 判断手机格式是否正确
 * @param { String } num 手机号 字符串
 * @return { Boolean } true是有效  false无效
 * @example
 * isPhoneNum('13651971940')   // true
 */
declare function isPhoneNum(num: string): boolean;
export default isPhoneNum;
