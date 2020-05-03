/**
 * 判断是否是空字符串  多个空格也视为空字符
 * @param str 需要校验的字符串
 * @return Boolean 是否是空字符串
 */
function isEmptyStr(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '').length === 0;
}
export default isEmptyStr;
