/**
 * 通用的装饰器
 */
import Log from "./../log/index";

class Decorator {
  /**
   * 装饰器，作用在类的方法上
   * 方法的 log 信息
   */
  static log(target, name, descriptor): void {
    const fn = descriptor.value;
    descriptor.value = (...args) => {
      let result;
      Log.groupCollapsed(
        `[d-utils] DecoratorUtils ${name}方法的执行信息`,
        Log.defaultColor
      );
      Log.default(`${name}(${args})`, `方法准备执行:`);
      Log.info(args, "详细的参数值: ");
      try {
        result = fn.apply(target, args);
        Log.success(result, `执行成功结果:`);
      } catch (err) {
        Log.error(err, `执行失败结果:`);
      }
      Log.groupEnd();
    };
  }

  /**
   * 装饰器，作用在类的方法上
   * 方法执行时间
   */
  static fnTime(target, name, descriptor): object | void {
    const fn = descriptor.value;
    if (typeof fn !== "function") {
      Log.error(`${name}必须为方法`, `[d-utils] fnTime 执行失败结果: `);
      return;
    }

    return {
      ...descriptor,
      value() {
        console.time(`[d-utils] ${name}方法执行时间: `);
        try {
          return fn.apply(target, arguments);
        } finally {
          console.timeEnd(`[d-utils] ${name}方法执行时间: `);
        }
      },
    };
  }
}

export default Decorator;
