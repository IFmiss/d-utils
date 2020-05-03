declare class Decorator {
    /**
     * 装饰器，作用在类的方法上
     * 方法的 log 信息
     */
    static log(target: any, name: any, descriptor: any): any;
    /**
     * 装饰器，作用在类的方法上
     * 方法执行时间
     */
    static fnTime(target: any, name: any, descriptor: any): any;
}
export default Decorator;
