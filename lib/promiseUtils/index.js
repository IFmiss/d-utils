"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logUtils_1 = require("./../logUtils");
class PromiseUtils {
    /**
     * @description 等待加载
     * @param { funciton } callback 一个停止轮训的while事件  返回值为boolean  返回true的时候则停止阻塞  开始执行后续的代码
     * @param { number } loopTime 单次轮训的时长  默认100毫秒
     * @param { number } timeout 超时的时间   默认10000毫秒  10秒
     * @return Promise
     */
    static wait(callback, loopTime = 100, timeout = 10000) {
        return new Promise((resolve, reject) => {
            if (typeof callback === 'function' && typeof callback() === 'boolean') {
                const t = setInterval(() => {
                    if (callback()) {
                        clearTimeout(t);
                        clearTimeout(out);
                        resolve();
                    }
                }, loopTime);
                const out = setTimeout(() => {
                    logUtils_1.default.logError('', '[d-utils] PromiseUtils wait timeout');
                    clearTimeout(t);
                    clearTimeout(out);
                    reject();
                }, timeout);
            }
        });
    }
    /**
     * @description 加载队列的操作
     * @param { promise[] } requestQueues 一个加载队列  promise的数组
     */
    static requestOnLoad(requestQueues) {
        return Promise.all(requestQueues);
    }
    /**
     * @description 睡眠
     * @param { number } timer  睡眠时长  执行后续的操作
     * @return promise
     */
    static sleep(timer) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, timer);
        });
    }
}
exports.default = PromiseUtils;
