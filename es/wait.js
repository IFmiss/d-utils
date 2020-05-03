/**
 * @description 等待加载
 * @param { funciton } callback 一个停止轮训的while事件  返回值为boolean  返回true的时候则停止阻塞  开始执行后续的代码
 * @param { number } loopTime 单次轮训的时长  默认100毫秒
 * @param { number } timeout 超时的时间   默认10000毫秒  10秒
 * @return Promise
 */
function wait(callback, loopTime = 100, timeout = 10000) {
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
                clearTimeout(t);
                clearTimeout(out);
                reject();
            }, timeout);
        }
    });
}
export default wait;
