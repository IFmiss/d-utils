/**
 * 获取url地址的参数信转化成键值对的对象格式
 * @param { string } url 解析的url地址
 * @example
 * UrlUtils.parseUrl('http://www.daiwei.org/?a=1&b=2')
 */
function parseUrl(url: string = window.location.search): any {
  const newUrl: string = url.slice(url.indexOf("?"));
  const sp: any = new URLSearchParams(newUrl);
  const obj = {};
  for (const [k, v] of sp.entries()) {
    obj[k] = v;
  }
  return obj;
}

export default parseUrl;
