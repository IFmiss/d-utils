/**
 * @description 移除url的某一个参数
 * @since 3.0.1
 * @param { Array } paramNames 参数名称的数组
 * @param { URL } url url地址
 * @return { String } 返回一个新地址
 * @example
 * UrlUtils.deleteUrlParam(['code', 'name'], 'http://localhost:2008/#a?a=22&b=2&code=3')
 * // 'http://localhost:2008/#a?a=22&b=2'
 */
export declare function deleteUrlParam(paramNames: string[], url?: string): string;
export default deleteUrlParam;
