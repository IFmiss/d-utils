/**
 * 一个简单的发布订阅者模式
 */
declare class Event {
    /**
     * 键值对 对应事件名称以及数组的值
     */
    static handler: {};
    /**
     * on 方法 添加监听事件
     */
    static on(name: string, handler: Function): Event;
    /**
     * off 方法 移除监听事件
     */
    static off(name: string, handler: Function): Event;
    /**
     * emit 方法 触发监听的事件
     */
    static emit(name: string, ...args: any): Event;
    /**
     * once 方法 添加事件 只会被执行一次
     */
    static once(name: string, handler: Function): void;
}
export default Event;
