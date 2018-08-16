const dom = {
  /**
	 * 判断元素是否存在某个class类
	 * @param { Element } el dom元素
	 * @param { String } className class名称
	 */
  hasClass(el, className) {
    return el.classList.contains(className)
  },

  /**
	 * 元素添加class
	 * @param { Element } el dom元素
	 * @param { (String | Array) } className class名称，可以是多个
	 */
  addClass(el, className) {
    if (Array.isArray(className)) {
      className.forEach(item => {
        if (!dom.hasClass(el, item)) {
          el.classList.add(item)
        }
      })
      return
    }
    if (!dom.hasClass(el, className)) {
      el.classList.add(className)
    }
  },

  /**
   * 元素删除class
   * @param { Element } el dom元素
   * @param { (String | Array) } className class名称，可以是多个
   */
  rmClass(el, className) {
    if (Array.isArray(className)) {
      className.forEach(item => {
        if (dom.hasClass(el, item)) {
          el.classList.remove(item)
        }
      })
      return
    }
    if (dom.hasClass(el, className)) {
      el.classList.remove(className)
    }
  },
  
  /**
   * 获取元素的css属性内容
   * @param { Element } el dom元素
   * @param { String } cssProp css的属性名称
   * @return { String } css对应的属性的值
   */
  getComputedStyle (el, cssProp) {
    if (!el) throw new Error('dom元素不存在')
    if (!cssProp) throw new Error('请输入需要查询的css属性名称')
    return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(el, false)[cssProp] : el.currentStyle[cssProp]
  },

  /**
   * 
   * @param { Element } el dom元素
   * @param { String } type filter类型   blur、opacity、grayscale、sepia、saturate、hue-rotate、invert、brightness、contrast、drop-shadow
   * @param { (String | Number) } option 参数 10px  10% 等等，根据不同type的类型设定不同的参数配置
   */
  cssFilter(el, type, option) {
    el.style.filter = `${type}(${option})`
    el.style.webkitFilter = `${type}(${option})`
  }
}

export default dom