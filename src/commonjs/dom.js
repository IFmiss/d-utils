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
	}
}

export default dom