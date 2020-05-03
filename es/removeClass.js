/**
 * @description 元素删除class
 * @param { HTMLElement } el dom元素
 * @param { (String | Array) } className class名称，可以是多个
 * @example
 * removeClass(document.body, 'd-utils')
 */
import hasClass from './hasClass';
function removeClass(el, className) {
    if (Array.isArray(className)) {
        className.forEach((item) => {
            if (hasClass(el, item)) {
                el.classList.remove(item);
            }
        });
        return;
    }
    if (hasClass(el, className)) {
        el.classList.remove(className);
    }
}
export default removeClass;
