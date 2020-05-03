/**
 * @description 正则表达式 邮箱是否合法
 */
export const EXP_EMAIL = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
/**
 * @description 判断email格式是否正确
 * @param { String } email 邮箱名称 字符串
 * @return { Boolean } true是有效  false无效
 * @example
 * isEmail('185098535@qq.com')  // true
 */
function isEmail(email) {
    return EXP_EMAIL.test(email);
}
export default isEmail;
