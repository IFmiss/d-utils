/**
 * 通用的装饰器
 */
export default class DecoratorUtils {
    /**
     * 方法的 log 信息
     */
    static log(target: any, name: any, descriptor: any): any;
    /**
     * 方法执行时间
     */
    static fnTime(target: any, name: any, descriptor: any): any;
}
