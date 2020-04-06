/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */
import hasClass from './hasClass'

function addClass(el: HTMLElement, className: string | string[]): void {
  if (Array.isArray(className)) {
    className.forEach((item: string) => {
      if (!hasClass(el, item)) {
        el.classList.add(item)
      }
    })
    return
  }
  if (!hasClass(el, className)) {
    el.classList.add(className)
  }
}

export default addClass
