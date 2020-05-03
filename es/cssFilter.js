/**
 * @description js设置元素的filter样式
 * @param { HTMLElement } el dom元素
 * @param { (String | Object) } type filter类型   blur、opacity、grayscale、sepia、saturate、hue-rotate、invert、brightness、contrast、drop-shadow, 当type为Object的时候就是显示一系列键值对，设置多个filter属性 `blur、opacity、grayscale、sepia、saturate、hue-rotate、invert、brightness、contrast、drop-shadow
 * @param { (String | Number) } option 参数 10px  10% 等等，根据不同type的类型设定不同的参数配置
 * @example
 * // 单个filter属性传参数
 * cssFilter(document.body, 'grayscale', 1)
 * // 多个filter属性传参数
 * cssFilter(document.body, {
 *   grayscale: 0.5,
 *   opacity: 0.7,
 *   'hue-rotate': '90deg'
 * })
 */
function cssFilter(el, type, option) {
    if (typeof type === 'object' && !option) {
        let cssText = '';
        for (let k in type) {
            if (type.hasOwnProperty(k)) {
                cssText += `${k}(${type[k]})`;
            }
        }
        el.style.filter = cssText;
        el.style.webkitFilter = cssText;
        return;
    }
    el.style.filter = `${type}(${option})`;
    el.style.webkitFilter = `${type}(${option})`;
}
export default cssFilter;
