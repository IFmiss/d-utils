/**
 * 获取url地址的参数信转化成键值对的对象格式
 * @param { string } url 解析的url地址
 * @example
 * UrlUtils.parseUrl('http://www.daiwei.org/?a=1&b=2')
 */
function parseUrl(url = window.location.search) {
    const newUrl = url.slice(url.indexOf('?'));
    const sp = new URLSearchParams(newUrl);
    const obj = {};
    for (let [k, v] of sp.entries()) {
        obj[k] = v;
    }
    return obj;
}
export default parseUrl;
