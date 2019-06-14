"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../logUtils/index");
/**
 * 通用的装饰器
 */
class DecoratorUtils {
    /**
     * 方法的 log 信息
     */
    static log(target, name, descriptor) {
        const fn = descriptor.value;
        descriptor.value = (...args) => {
            let result;
            index_1.default.groupCollapsed(`[d-utils] DecoratorUtils ${name}方法的执行信息`, index_1.default.defaultColor);
            index_1.default.logDefault(`${name}(${args})`, `方法准备执行:`);
            index_1.default.logInfo(args, '详细的参数值: ');
            try {
                result = fn.apply(target, args);
                index_1.default.logSuccess(result, `执行成功结果:`);
            }
            catch (err) {
                index_1.default.logError(err, `执行失败结果:`);
            }
            index_1.default.groupEnd();
        };
    }
    /**
     * 方法执行时间
     */
    static fnTime(target, name, descriptor) {
        const fn = descriptor.value;
        if (typeof fn !== 'function') {
            index_1.default.logError(`${name}必须为方法`, `[d-utils] fnTime 执行失败结果: `);
            return;
        }
        return Object.assign({}, descriptor, { value() {
                console.time(`[d-utils] ${name}方法执行时间: `);
                try {
                    return fn.apply(target, arguments);
                }
                finally {
                    console.timeEnd(`[d-utils] ${name}方法执行时间: `);
                }
            } });
    }
}
exports.default = DecoratorUtils;
