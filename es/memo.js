/**
 * @description 缓存函数
 * @param { Function } fn  需要被缓存的函数
 * @example
 * const memoFn = memo((a) => {
 *    console.log('fn 被执行')
 *    return a * 1000
 * })
 *
 * memoFn(10)
 * 结果： console.log('fn 被执行')
 * memoFn(10)
 * 结果： 无console的打印，返回对象中存储的结果
 */
function memo(fn) {
    let cache = {};
    const arg = Array.from(arguments).slice(0).toString();
    return function (str) {
        let newStr = str.toString();
        let res = cache[newStr];
        return res || (cache[newStr] = fn(str));
    };
}
export default memo;
