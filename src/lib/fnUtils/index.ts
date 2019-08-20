/**
 * 方法相关
 */

export function compose (...fns: Function[]) {
  return function (x) {
    return fns.reduceRight((arg, fn) => {
      return fn(arg)
    }, x)
  }
}
