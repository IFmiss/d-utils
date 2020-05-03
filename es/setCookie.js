/**
 * @description 设置Cookie
 * @param { String } name cookie名称
 * @param { String } value cooke的值
 * @param { Number } exp 过期时间 默认2小时 单位毫秒
 * @example
 * // 设置name为test的值为12345，设置过期时间为1小时
 * setCookie('test', '12345', 60 * 60 * 1000)
 */
function setCookie(name, value, exp = 60 * 60 * 2 * 1000) {
    const date = new Date();
    date.setTime(date.getTime() + exp);
    document.cookie = `${name}=${escape(value)};expires=${date.toUTCString()}`;
}
export default setCookie;
