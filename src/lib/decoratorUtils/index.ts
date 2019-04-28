import LogUtils from './../logUtils/index'
/**
 * 通用的装饰器
 */
export default class DecoratorUtils {
  /**
   * 方法的 log 信息
   */
  static log (target, name, descriptor): any {
    const fn = descriptor.value;
    descriptor.value = (...args) => {
      let result
      LogUtils.groupCollapsed(`[d-utils] => ${name}方法`, LogUtils.defaultColor)
      LogUtils.logDefault(`${name}(${args})`, `方法准备执行:`)
      LogUtils.logInfo(args, '详细的参数值: ')
      try {
        result = fn.apply(target, args)
        LogUtils.logSuccess(result, `执行成功结果:`)
      } catch (err) {
        LogUtils.logError(err, `执行失败结果:`)
      }
      LogUtils.groupEnd()
    }
  }

  /**
   * 方法执行时间
   */
  static fnTime (target, name, descriptor) {
    const fn = descriptor.value
    if (typeof fn !== 'function') {
      LogUtils.logError(`${name}必须为方法`, `[d-utils] fnTime 执行失败结果:`)
      return
    }

    return {
      ...descriptor,
      value () {
        console.time(`${name}方法执行时间: `);
        try {
          return fn.apply(target, arguments)
        } finally {
          console.timeEnd(`${name}方法执行时间: `)
        }
      }
    }
  }
}
