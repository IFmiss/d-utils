/**
 * 工具类
 */
const utils = {
	/**
	 * console的美化样式
	 * @param { String } text 内容
	 * @param { Boolean } isMax 是否是较大显示console的高度，如果console的内容较多建议设置为false
	 */
	console (text = '未曾遗忘的青春', isMax = true) {
		if (isMax) {
			console.log(`%c${text}`, `background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY2Y2NjYyIvPjxzdG9wIG9mZnNldD0iMjAlIiBzdG9wLWNvbG9yPSIjMzM5OTk5Ii8+PHN0b3Agb2Zmc2V0PSI0MCUiIHN0b3AtY29sb3I9IiNjY2NjOTkiLz48c3RvcCBvZmZzZXQ9IjYwJSIgc3RvcC1jb2xvcj0iIzk5Y2NmZiIvPjxzdG9wIG9mZnNldD0iODAlIiBzdG9wLWNvbG9yPSIjY2NjY2ZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmY5OWNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g');background-size: 100%;background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #66cccc), color-stop(20%, #339999), color-stop(40%, #cccc99), color-stop(60%, #99ccff), color-stop(80%, #ccccff), color-stop(100%, #ff99cc));background-image: -moz-linear-gradient(left, #66cccc 0%, #339999 20%, #cccc99 40%, #99ccff 60%, #ccccff 80%, #ff99cc 100%);background-image: -webkit-linear-gradient(left, #66cccc 0%, #339999 20%, #cccc99 40%, #99ccff 60%, #ccccff 80%, #ff99cc 100%);background-image: linear-gradient(to right, #66cccc 0%, #339999 20%, #cccc99 40%, #99ccff 60%, #ccccff 80%, #ff99cc 100%);padding:20px 40px;color:#fff;font-size:12px;`)
		} else {
			console.log(`%c${text}`, `background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY2Y2NjYyIvPjxzdG9wIG9mZnNldD0iMjAlIiBzdG9wLWNvbG9yPSIjMzM5OTk5Ii8+PHN0b3Agb2Zmc2V0PSI0MCUiIHN0b3AtY29sb3I9IiNjY2NjOTkiLz48c3RvcCBvZmZzZXQ9IjYwJSIgc3RvcC1jb2xvcj0iIzk5Y2NmZiIvPjxzdG9wIG9mZnNldD0iODAlIiBzdG9wLWNvbG9yPSIjY2NjY2ZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmY5OWNjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g');background-size: 100%;background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #66cccc), color-stop(20%, #339999), color-stop(40%, #cccc99), color-stop(60%, #99ccff), color-stop(80%, #ccccff), color-stop(100%, #ff99cc));background-image: -moz-linear-gradient(left, #66cccc 0%, #339999 20%, #cccc99 40%, #99ccff 60%, #ccccff 80%, #ff99cc 100%);background-image: -webkit-linear-gradient(left, #66cccc 0%, #339999 20%, #cccc99 40%, #99ccff 60%, #ccccff 80%, #ff99cc 100%);background-image: linear-gradient(to right, #66cccc 0%, #339999 20%, #cccc99 40%, #99ccff 60%, #ccccff 80%, #ff99cc 100%);padding:2px 5px;color:#fff;font-size:12px;`)
		}
	},

	/**
	 * 初始化类型判断方法
	 * 需要在调用isArray,isObjec之前初始化该方法则可使用
	 */
	initEsDataType () {
		this.dataType = {}
		let type = (o) => {
			let s = Object.prototype.toString.call(o)
			return s.match(/\[object (.*?)\]/)[1].toLowerCase()
		}
		const _self = this;
		['Null',
		'Undefined',
		'Object',
		'Array',
		'String',
		'Number',
		'Boolean',
		'Function',
		'RegExp'
		].forEach(function (t) {
				_self.dataType['is' + t] = function (o) {
				return type(o) === t.toLowerCase()
			}
		})
	},

	/**
	 * 浏览器提示
	 * @param { Object } options
	 * @param { String } options.title 浏览器提示的标题  类似标题
	 * @param { String } options.body 浏览器提示的内容主体  类似正文
	 * @param { String } options.icon 浏览器提示的图标用于  类似logo效果
	 * @param { Function } options.show 浏览器提示的显示的时候执行的方法
	 * @param { Function } options.click 浏览器提示被鼠标点击执行的方法
	 * @returns { Promise } resolve(options) 浏览器可以显示
	 * @returns { Promise } reject(options) 浏览器不可以显示
	 */
	notification (options) {
		const defaultV = {
			title: '未曾遗忘的青春',
			body: 'Hello World !!!',
			icon: 'http://www.daiwei.org/index/images/logo/dw1.png',
			show: () => {},
			click: () => {}
		}
		let newOpt = Object.assign(defaultV, options)
		return new Promise((resolve, reject) => {
			if (window.Notification && Notification.permission !== "denied") {
				Notification.requestPermission(function(status) {
					let n = new Notification( newOpt.title, {
						body: newOpt.body,
						icon: newOpt.icon,
					})
					n.onshow = function() {
						newOpt.show()
					}
					n.onclick = function() {
						newOpt.click()
					}
				})
				resolve(defaultV)
			} else {
				reject(defaultV)
			}
		})
	},

	/*
	 * 返回rgba随机色
	 * @param { Number } opacity 透明度 0～1之间
	 * @returns { String } rgba色值
	 */
	randomColor (opacity = 1) {
		const r = Math.floor(Math.random() * 256)
		const g = Math.floor(Math.random() * 256)
		const b = Math.floor(Math.random() * 256)
		return `rgba(${r},${g},${b},${opacity})`
	},

	/**
	 * 显示元素的outline出现布局框架   by  Addy Osmani
	 */
	showLayoutFramework() {
		[].forEach.call( document.querySelectorAll("*"),function(a){  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16) }); 
	},

	/**
	 * 返回浏览器url的参数
	 * @param { String } url 地址字符串
	 * @returns { Object } 返回一个参数对象
	 */
	parseUrl (url) {
		if (!url) return
		let newUrl = url.slice(url.indexOf('?'))
		let arr = newUrl.slice(1).split('&')
		let obj = {}
		for (let i = 0; i < arr.length; i++) {
			obj[arr[i].split('=')[0]] = arr[i].split('=')[1]
		}
		return obj
	},

	/**
	 * 计算字符串长度 isStrict为true的时候 返回一个字符串的长度，汉字算2个字符长度
	 * @param { String } str 要计算的字符串
	 * @param { Boolean } isStrict true 返回一个字符串的长度，汉字算2个字符长度; false 直接返回长度
	 * @returns { Number } 返回字符串长度
	 */
	calcStringLength (str, isStrict) {
		if (typeof str !== 'string') throw new Error ('需要计算的内容必须时字符串')
		if (!isStrict) return str.length
		let a = 0;
		for (let i = 0; i < str.length; i++ ) {
			let count = str.charCodeAt(i) > 255 ? 2 : 1
			a += count
		}
		return a;
	}
}

export default utils