/**
 * 一个简单的发布订阅者模式
 */
class Event {
    /**
     * on 方法 添加监听事件
     */
    static on(name, handler) {
        const i = {
            fn: handler,
            type: 'on',
            name: name
        };
        if (Object.keys(Event.handler).includes(name)) {
            Event.handler[name].push(i);
            return Event;
        }
        Event.handler[name] = [].concat(i);
        return Event;
    }
    /**
     * off 方法 移除监听事件
     */
    static off(name, handler) {
        const event = Event.handler[name];
        if (event) {
            for (let i = event.length - 1; i >= 0; i--) {
                if (event[i].fn === handler) {
                    event.splice(i, 1);
                }
            }
        }
        return Event;
    }
    /**
     * emit 方法 触发监听的事件
     */
    static emit(name, ...args) {
        const event = Event.handler[name];
        let newEvent = [];
        event && event.length && event.forEach((item, index) => {
            item.fn.call(this, ...args);
            // 如果有只监听一次的事件
            if (item.type !== 'once') {
                newEvent.push(event.slice(index, index + 1));
            }
        });
        const hasOnce = event && event.length && event.some((item) => {
            return item.type === 'once';
        });
        if (hasOnce) {
            Event.handler[name] = newEvent;
        }
        // 这里做一个执行完成之后的 once代码 off 的操作
        return Event;
    }
    /**
     * once 方法 添加事件 只会被执行一次
     */
    static once(name, handler) {
        Event.on(name, handler);
        Event.handler[name][0]['type'] = 'once';
    }
}
/**
 * 键值对 对应事件名称以及数组的值
 */
Event.handler = {};
export default Event;
