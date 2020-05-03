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
declare function memo(fn: Function): (str: string | number | boolean) => any;
export default memo;
