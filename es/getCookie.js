/**
 * @description 获取Cookie
 * @param { String } name cookie名称
 * @returns { (Array | Null) } 返回数据
 * @example
 * getCookie('test')
 */
function getCookie(name) {
    if (name) {
        const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
        const arr = document.cookie.match(reg);
        return arr && arr[2] ? arr[2] : null;
    }
    const getAllCookies = [];
    if (document.cookie.length) {
        const arrCookie = document
            .cookie
            .split('; ');
        for (let k in arrCookie) {
            getAllCookies.push({
                name: `${unescape(arrCookie[k].split('=')[0])}`,
                value: `${unescape(arrCookie[k].split('=')[1])}`
            });
        }
        return getAllCookies;
    }
    else {
        return null;
    }
}
export default getCookie;
