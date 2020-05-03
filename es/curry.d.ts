/**
 * @description 函数柯里化工具
 * @param { Function } fn 方法
 * @param { Any } agrs 参数，可选
 * @example
 * const addCur = function (a, b, c) {
 *   console.log('a + b + c', a + b + c)
 * }
 * const reduceCur = function (a, b, c) {
 *   console.log('a - b - c', a - b - c)
 * }
 * const add = curry(addCur, 2)
 * s(1)(2)   // a + b + c 6
 * s(1, 3)   // a + b + c 6
 *
 * const reduce = curry(reduceCur)
 * const reduce1 = curry(reduceCur)
 * reduce(1)(2)(3)    // a - b - c -1
 * reduce1(1, 2, 3)    // a - b - c -3
 */
declare function curry(fn: Function, ...arg: any): any;
export default curry;
