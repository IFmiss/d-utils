/**
 * @description 正则表达式 邮箱是否合法
 */
export declare const EXP_EMAIL: RegExp;
/**
 * @description 判断email格式是否正确
 * @param { String } email 邮箱名称 字符串
 * @return { Boolean } true是有效  false无效
 * @example
 * isEmail('185098535@qq.com')  // true
 */
declare function isEmail(email: string): boolean;
export default isEmail;
