/**
 * 判断是否是JOSN字符串
 * @param str 需要校验的字符串
 * @return Boolean 是否是JSON格式的字符串
 */
function isJson(str) {
    if (typeof str == 'string') {
        try {
            JSON.parse(str);
            return str.includes('{');
        }
        catch (e) {
            return false;
        }
    }
    return false;
}
export default isJson;
