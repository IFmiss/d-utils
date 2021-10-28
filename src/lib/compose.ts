/**
 * @description 方法的从右往左执行
 * @param { Function } fns 各种方法
 * @example
 * compose(a, b, c)(...query) // a, b, c 皆为方法
 *
 * const testCompose = (name, age) => {
 *   console.log('this name is: ', name)
 *   console.log('this age is: ', age)
 *   // 如果方法内部返回多个值作为后一个方法的参数，使用数组返回
 *   return [name, age]
 * }
 * const full = (name, age) => {
 *   console.log(`this is full: ${name} & ${age}`)
 * }
 *
 * compose(full, testCompose)('d-utils', 1)
 *
 * // this name is:  d-utils
 * // this age is:  1
 * // this is full: d-utils & 1
 */
function compose(...fn: Function[]) {
  return function (...args: any) {
    return fn.reduceRight((prevResult, currentFn) => {
      return currentFn.call(this, ...prevResult);
    }, args);
  };
}

export default compose;
