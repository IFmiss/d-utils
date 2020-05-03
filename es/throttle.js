/**
 * @description 函数节流
 * @param { Function } fn 需要节流的函数
 * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
 * @example
 * // 在鼠标resize的过程中，1秒触发一次，如果resize了10秒相当于console.log('resize')只执行了10次
 * window.onresize = throttle(function () {
 * // es5 获取参数
 * let arg = Array.prototype.slice.call(arguments)
 * // es6 获取参数
 * let arg1 = Array.from(arguments)
 * console.log('resize-throttle', arg)
 * console.log('resize-throttle', arg1)
 * }, 1000)
 */
function throttle(fn, t = 1000) {
    if (typeof fn !== 'function') {
        console.error(`第一个参数必须是方法`, '[d-utils] GenericUtils throttle error => ');
        return;
    }
    const _fn = fn;
    let time = null;
    let first = true;
    return function () {
        let arg = arguments;
        let _this = this;
        if (first) {
            _fn.apply(_this, arg);
            first = false;
            return;
        }
        if (time)
            return;
        time = setTimeout(function () {
            setTimeout(time);
            time = null;
            _fn.apply(_this, arg);
        }, t);
    };
}
export default throttle;
