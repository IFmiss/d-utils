/**
 * @description 函数防抖
 * @param { Function } fn 需要防抖的函数
 * @param { Number } t 防抖时间，多久以后才能再执行 单位ms
 * @param { Boolean } immediate true: 立刻执行方法且最后一次时间不执行, false: 等t时间之后再执行方法，如果t时间内执行，则在最后一次的t时间之后执行方法，类似动态搜索效果
 * @example
 * // 在鼠标resize的过程中，1秒以后可以被执行，如果在1秒内触发resize，则从新计算下一个一秒再允许执行
 * window.onresize = debounce(function () {
 * // es5 获取参数
 * let arg = Array.prototype.slice.call(arguments)
 * // es6 获取参数
 * let arg1 = Array.from(arguments)
 * console.log('resize-debounce', arg)
 * console.log('resize-debounce', arg1)
 * }, 1000)
 */
export function debounce(fn, t, immediate = true) {
    if (typeof fn !== 'function') {
        console.error(`第一个参数必须是方法`, '[d-utils] GenericUtils debounce error => ');
        return;
    }
    let time;
    //  立刻执行第一次该方法
    if (immediate) {
        return function () {
            clearTimeout(time);
            if (!time) {
                fn.apply(this, arguments);
            }
            time = setTimeout(function () {
                setTimeout(time);
                time = null;
            }, t);
        };
    }
    else {
        // 满足 time 时间结束之后自动执行一次该方法
        return function () {
            clearTimeout(time);
            time = setTimeout(function () {
                setTimeout(time);
                fn.apply(this, arguments);
                time = null;
            }, t);
        };
    }
}
export default debounce;
