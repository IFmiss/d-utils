/**
 * @description base64解码成字符串
 * @param str base64字符串
 * @return 返回str字符串
 */
function base64Decode(str) {
    return window.atob(decodeURIComponent(str));
}
export default base64Decode;
