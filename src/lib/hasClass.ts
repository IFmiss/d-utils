/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */
function hasClass(el: HTMLElement, className: string): boolean {
  return el.classList.contains(className);
}

export default hasClass;
