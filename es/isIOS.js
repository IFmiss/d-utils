/**
 * @description 正则表达式 判断是否为IOS设备
 */
export const EXP_IOS = /(iPhone|iPad|iPod|iOS)/i;
/**
 * @description 判断是否是IOS操作系统
 * @return { Boolean } 返回是否是IOS的布尔值
 * @example
 * isIOS() // false
 */
export function isIOS() {
    const ua = window.navigator.userAgent;
    return EXP_IOS.test(ua);
}
export default isIOS;
