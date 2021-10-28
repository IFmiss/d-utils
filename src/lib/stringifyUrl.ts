/**
 * @description object对象转化成get请求的字符串形式
 * @param { Object } obj  需要操作的对象
 * @return { String } 返回一个字符串 a=1&b=2
 * @example
 * // 'a=1&b=2'
 * UrlUtils.stringifyUrl({a: 1, b: 2})
 */
function stringifyUrl(obj: object): string {
  const arr = Object.entries(obj);
  return arr
    .map((item) => {
      const [k, v] = [...item];
      return `${k}=${encodeURIComponent(v)}`;
    })
    .join("&");
}

export default stringifyUrl;
