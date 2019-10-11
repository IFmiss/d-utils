/**
 * @description  d-utils-lite
 */
import { GenericType } from './type';
/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */
export declare function hasClass(el: HTMLElement, className: string): boolean;
/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */
export declare function addClass(el: HTMLElement, className: string | string[]): void;
/**
 * @description 元素删除class
 * @param { HTMLElement } el dom元素
 * @param { (String | Array) } className class名称，可以是多个
 * @example
 * removeClass(document.body, 'd-utils')
 */
export declare function removeClass(el: HTMLElement, className: string | string[]): void;
/**
 * @description 获取元素的css属性内容
 * @param { HTMLElement } el dom元素
 * @param { String } cssProp css的属性名称
 * @return { String } css对应的属性的值
 * @example
 * computedStyle(document.body, 'width')
 */
export declare function computedStyle(el: any, cssProp: any): void;
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
export declare function cssFilter(el: HTMLElement, type: any, option: string | number): void;
/**
 * =============================================
 * 工具类
 * =============================================
 */
/**
 * @description 浏览器提示
 * @param { object } options  参数为对象，以下都是对象内的属性配置
 * @property { String } title 浏览器提示的标题  类似标题
 * @property { String } body 浏览器提示的内容主体  类似正文
 * @property { String } icon 浏览器提示的图标用于  类似logo效果
 * @property { Function } show 浏览器提示的显示的时候执行的方法
 * @property { Function } click 浏览器提示被鼠标点击执行的方法
 * @returns { Promise } resolve(options) 浏览器可以显示
 * @returns { Promise } reject(options) 浏览器不可以显示
 * @example
 * const data = {
 *  title: 'notification',
 *  body: 'this is a test',
 *  logo: 'http://www.daiwei.org/index/images/logo/dw1.png'
 * }
 * notification(data)
 */
export declare function notification(options?: GenericType.INotification): Promise<any>;
/**
 * @description 返回rgba随机色
 * @param { Number } opacity    透明度 0～1之间
 * @return { String } rgba色值
 * @example
 * const color = randomColor(1)
 * console(color)
 */
export declare function randomColor(opacity?: number): string;
/**
 * @description 显示元素的outline出现布局框架
 * @author Addy Osmani
 * @example
 * showLayoutFramework()
 */
export declare function layoutFramework(): void;
/**
 * @description 计算字符串长度 isStrict为true的时候 返回一个字符串的长度，汉字算2个字符长度
 * @param { String } str  要计算的字符串
 * @param { Boolean } isStrict  true 返回一个字符串的长度，汉字算2个字符长度; false 直接返回长度
 * @return { Number } 返回字符串长度
 * @example
 * const str = 'd-utils库'
 * console(calcStringLength(str))
 * console(calcStringLength(str, true))
 */
export declare function calcStringLength(str: string, isStrict?: boolean): number;
/**
 * @description 字符串的去除空格
 * @param { String } str 操作的字符串
 * @param { Number } type 类型 0: 去除首位空格；1: 去除所有空格； 2: 去除左边空格； 3： 去除右边空格； 默认为去除首位空格
 * @return { String } 返回操作之后的字符串
 * @example
 * const str = ' d -js- ut ils '
 * // 0: 去除首尾空格 默认为0
 * strTrim(str)
 * strTrim(str, 0)
 * @example
 * // 1: 去除所有空格
 * strTrim(str, 1)
 * @example
 * // 2: 去除左边空格
 * strTrim(str, 2)
 * @example
 * // 3: 去除右边空格
 * strTrim(str, 3)
 */
export declare function strTrim(str: string, type?: GenericType.StrTrimType): string;
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
export declare function throttle(fn: Function, t?: number): any;
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
export declare function debounce(fn: Function, t: number, immediate?: boolean): any;
/**
 * @description 日期格式化 可转换成自己想要的格式
 * @param { String } fmt 格式模板 'yyyy-MM-dd hh:mm:ss'
 * @param { Date } date 日期内容  如 当前日期 new Date()
 * @return { String } '2018-08-15 01:46:22'
 * @example
 * formatDate(`yyyy-MM-dd hh:mm:ss`, new Date())
 * @example
 * formatDate(`yyyy-MM-dd`, new Date())
 */
export declare function formatDate(fmt: string, date?: any): any;
/**
 * @description 复制网页文字到剪切板，之后可以粘贴在任何可粘贴的地方
 * @param { String } str 拷贝的内容
 * @example
 * copyCode('hello world')
 */
export declare function copyCode(str: string): void;
/**
 * @description 字符串转成base64编码
 * @param str 字符串
 * @return str base64 字符串
 */
export declare function base64Encode(str: string): string;
/**
 * @description base64解码成字符串
 * @param str base64字符串
 * @return 返回str字符串
 */
export declare function base64Decode(str: string): string;
/**
 * =============================================
 * 数据的操作存储以及数据处理
 * =============================================
 */
/**
 * @description 设置Cookie
 * @param { String } name cookie名称
 * @param { String } value cooke的值
 * @param { Number } exp 过期时间 默认2小时 单位毫秒
 * @example
 * // 设置name为test的值为12345，设置过期时间为1小时
 * setCookie('test', '12345', 60 * 60 * 1000)
 */
export declare function setCookie(name: string, value: string, exp?: number): void;
/**
 * @description 获取Cookie
 * @param { String } name cookie名称
 * @returns { (Array | Null) } 返回数据
 * @example
 * getCookie('test')
 */
export declare function getCookie(name?: string): string | any;
/**
 * @description 删除Cookie
 * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
 * @returns { Array } 是一个伪数组
 * @example
 * removeCookie('test')
 */
export declare function removeCookie(name: string): any;
/**
 * @description 从数组中获取num 个随机不重复的元素
 * @param { Arrary } arr 数组
 * @param { Number } num 取出的数量
 * @returns { Arrary } 返回数组集合
 * @example
 * getRandomDataFromArr([1,2,3,4,5,44,3,2,1,9,0,45,678], 5)
 */
export declare function randomDataFromArr(arr: any[], num: number): any;
/**
 * @description 检索数据类型并返回数据类型名称 object array string undefined bool number null 等等...
 * @param { Any } data 要判断的数据
 * @example
 * checkType('1')   // string
 * @example
 * checkType({})   // object
 * @example
 * checkType([])   // array
 * @example
 * checkType(localStorage)   // storage
 */
export declare function checkType(data: any): string;
/**
 * @description 深拷贝
 * @param { Object } obj 被拷贝的对象
 * @return { Object } 返回新的对象
 * @example
 * let a = {
 *   a: 1,
 *   b: 2,
 *   c: 3,
 *   d: [1, 2]
 * }
 * let b = deepClone(a)
 * a.d[0] = 3
 * console.log(a)
 * // a: {a: 1, b: 2, c: 3, d: [3, 2]}
 * console.log(b)
 * // b: {a: 1, b: 2, c: 3, d: [1, 2]}
 * // 此时修改a.d[0]的值， a对象变化了，b对象没有随之改变
 */
export declare function deepClone(obj: any): any;
/**
 * @description extend继承方法 Object.assign(...arg)的包装
 * @param { Any }   参数为object对象
 * @returns { Object } 返回一个新的对象
 * @example
 * extend({a: 1}, {a: 2})   // {a: 1}
 * ⚠️ Object.assign属于浅拷贝,为了后续的操作不影响到之前的数据,最好在extend的第一个参数设置为{}
 */
export declare function extend(...arg: any): any;
/**
 * @description 数组去重
 * @param { Arrary } arr 要去重的arr
 * @return { Array } 返回一个新的数组，不改变原来的数组
 * @example
 * // [1, 2, 3, undefined, "4"]
 * uniqueArray([1,2,3,3,,3,3,'4',"4",'4',])
 */
export declare function uniqueArray(arr: any[]): any[];
/**
 * @description 文件转成blob流
 * @param { File } dataUrl  单个file
 * @return { Blob } 返回新的文件流  可以append到formdata中
 */
export declare function dataUrlToBlob(dataUrl: any): Blob;
/**
 * @description 返回数组之间的并集
 * @param { Array } args 可以是多个数组，数量不限制
 * @return { Array } 返回数组
 */
export declare function union(...args: any[]): any[];
/**
 * @description 返回两个数组之间的交集
 * @param { Array } args 可以是多个数组，两个数组
 * @return { Array } 返回数组
 */
export declare function intersection(a: any[], b: any[]): any[];
/**
 * @description 返回两个数组之间的差集
 * @param { Array } args 可以是多个数组，两个数组
 * @return { Array } 返回数组
 */
export declare function diffset(a: any[], b: any[]): any[];
/**
 * @description 判断元素在数组或者字符串里存在的次数
 * @param { Array | String } target 存在的数组或字符串
 * @param { String | Number | ... } s 目标元素  值类型的元素
 * @return { Number } 数量
 */
export declare function calcQuantity(target: any[] | string, s: any): any;
/**
 * =============================================
 * 正则校验类
 * =============================================
 */
/**
 * @description 浏览器 信息 window.navigator.userAgent
 */
export declare const ua: string;
/**
 * @description 正则表达式 判断是否为移动设备
 */
export declare const EXP_MOBILE: RegExp;
/**
 * @description 判断是否是移动端
 * @return { Boolean } 返回是否是移动端的布尔值
 * @example
 * isMobile() // false
 */
export declare function isMobile(): boolean;
/**
 * @description 正则表达式 判断是否为IOS设备
 */
export declare const EXP_IOS: RegExp;
/**
 * @description 判断是否是IOS操作系统
 * @return { Boolean } 返回是否是IOS的布尔值
 * @example
 * isIOS() // false
 */
export declare function isIOS(): boolean;
/**
 * @description 判断是否是Android操作系统
 * @return { Boolean } 返回是否是Android的布尔值
 * @example
 * isAndroid() // false
 */
export declare function isAndroid(): boolean;
/**
 * @description 正则表达式 手机的合法校验 /^1[3-9]\d{9}$/
 */
export declare const EXP_PHONE_NUM: RegExp;
/**
 * @description 判断手机格式是否正确
 * @param { String } num 手机号 字符串
 * @return { Boolean } true是有效  false无效
 * @example
 * isPhoneNum('13651971940')   // true
 */
export declare function isPhoneNum(num: string): boolean;
/**
 * @description 正则表达式 邮箱是否合法
 */
export declare const EXP_EMAIL: RegExp;
/**
 * @description 判断email格式是否正确
 * @param { String } email 邮箱名称 字符串
 * @return { Boolean } true是有效  false无效
 * @example
 * isEmail('185098535@qq.com')  // true
 */
export declare function isEmail(email: string): boolean;
/**
 * @description 判断当前是否是微信浏览器
 * @return Boolean
 * @example
 * isWeiXin()  // true
 */
export declare function isWeiXin(): boolean;
/**
 * @description 正则表达式是否全部是
 */
export declare const EXP_CHINESE: RegExp;
/**
 * @description 判断字符串是否都是中文
 * @param { String } str
 * @return Boolean
 * @example
 * isChinese('你好，世界')  // false
 * isChinese('你好')   // true
 * isChinese('world')   // false
 */
export declare function isChinese(str: string): boolean;
/**
 * 判断是否是 Object
 */
export declare function isObject(o: any): boolean;
/**
  * @description 判断对象是否是空对象
  * @param { Object } 传入的对象
  * @return Boolean 是否是空对象
  * @example
  * let obj = {
  *   a: 1,
  *   b: 2
  * }
  * let obj1 = {}
  * isEmptyObject(obj)   // false
  * isEmptyObject(obj1)   // true
  */
export declare function isEmptyObject(obj: any): boolean;
/**
 * 判断是否是空字符串  多个空格也视为空字符
 * @param str 需要校验的字符串
 * @return Boolean 是否是空字符串
 */
export declare function isEmptyStr(str: any): boolean;
/**
 * =============================================
 * 设备相关
 * =============================================
 */
/**
 * @description 横竖屏的判断,如果是横屏幕显示,显示dom提示竖屏显示
 * @param { String } 提示内容
 * @example
 * DeviceUtils.checkLayoutOrientation() // 横屏时候提示 请旋转屏幕，以达到更好的浏览效果
 * @example
 * DeviceUtils.checkLayoutOrientation('请竖直使用手机') // 横屏时候提示 请竖直使用手机
 */
export declare function checkLayoutOrientation(text?: string): void;
/**
  * @description 移动端REM的初始化js的方法，默认基于750的设计稿，可以限制最大显示宽度, 超出需要isFullOverMax 判断是否全屏幕显示, 不全屏则是body居中
  * @param { number }  BaseWidth   基础的设计稿宽度        默认750
  * @param { number }  MaxWidth    移动端最大的比例宽度点   默认document.body.clientWidth
  * @param { boolean } isFullOverMax   超出{MaxWidth}最大宽度的时候是否居中显示(body居中的前提是超出设定的宽度以及isFullOverMax=false) 默认false
  * @example
  * DeviceUtils.initRem()
  */
export declare function initRem(BaseWidth?: number, MaxWidth?: number, isFullOverMax?: boolean): void;
/**
 * =============================================
 * 装饰器
 * =============================================
 */
/**
* 装饰器，作用在类的方法上
* 方法的 log 信息
*/
export declare function log(target: any, name: any, descriptor: any): any;
/**
 * 装饰器，作用在类的方法上
 * 方法执行时间
 */
export declare function fnTime(target: any, name: any, descriptor: any): any;
/**
 * =============================================
 * Promise 相关
 * =============================================
 */
/**
 * @description 等待加载
 * @param { funciton } callback 一个停止轮训的while事件  返回值为boolean  返回true的时候则停止阻塞  开始执行后续的代码
 * @param { number } loopTime 单次轮训的时长  默认100毫秒
 * @param { number } timeout 超时的时间   默认10000毫秒  10秒
 * @return Promise
 */
export declare function wait(callback: () => boolean, loopTime?: number, timeout?: number): Promise<any>;
/**
 * @description 加载队列的操作
 * @param { promise[] } requestQueues 一个加载队列  promise的数组
 */
export declare function requestOnLoad(requestQueues: Promise<any>[]): Promise<any>;
/**
 * @description 睡眠, 阻塞代码 timer毫秒
 * @param { number } timer  睡眠时长  执行后续的操作
 * @return promise
 */
export declare function sleep(timer: any): Promise<{}>;
/**
 * @description async / await 的错误处理   通过err的条件判断或者!res 的条件判断来走后续流程
 * @param { Promise } promise
 * @return { Array }  array [0] 为err， array[1] 为data
 */
export declare function wrap(promise: Promise<any>): Promise<any[]>;
/**
 * =============================================
 * 方法 相关
 * =============================================
 */
/**
 * @description 方法的从右往左执行
 * @param { Function } fns 各种方法
 * @example
 * compose(a, b, c) // a, b, c 皆为方法
 */
export declare function compose(...fns: Function[]): (x: any) => any;
