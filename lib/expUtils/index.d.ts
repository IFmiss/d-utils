export default class ExpUtils {
    /**
     * @description 浏览器 信息 window.navigator.userAgent
     */
    static ua: string;
    /**
     * @description 正则表达式 判断是否为移动设备
     */
    static EXP_MOBILE: RegExp;
    /**
     * @description 判断是否是移动端
     * @return { Boolean } 返回是否是移动端的布尔值
     * @example
     * ExpUtils.isMobile() // false
     */
    static isMobile(): boolean;
    /**
     * @description 正则表达式 判断是否为IOS设备
     */
    static EXP_IOS: RegExp;
    /**
     * @description 判断是否是IOS操作系统
     * @return { Boolean } 返回是否是IOS的布尔值
     * @example
     * ExpUtils.isIOS() // false
     */
    static isIOS(): boolean;
    /**
     * @description 判断是否是Android操作系统
     * @return { Boolean } 返回是否是Android的布尔值
     * @example
     * ExpUtils.isAndroid() // false
     */
    static isAndroid(): boolean;
    /**
     * @description 正则表达式 手机的合法校验 /^1[3-9]\d{9}$/
     */
    static EXP_PHONE_NUM: RegExp;
    /**
     * @description 判断手机格式是否正确
     * @param { String } num 手机号 字符串
     * @return { Boolean } true是有效  false无效
     * @example
     * ExpUtils.isPhoneNum('13651971940')   // true
     */
    static isPhoneNum(num: string): boolean;
    /**
     * @description 正则表达式 邮箱是否合法
     */
    static EXP_EMAIL: RegExp;
    /**
     * @description 判断email格式是否正确
     * @param { String } email 邮箱名称 字符串
     * @return { Boolean } true是有效  false无效
     * @example
     * ExpUtils.isEmail('185098535@qq.com')  // true
     */
    static isEmail(email: string): boolean;
    /**
     * @description 判断当前是否是微信浏览器
     * @return Boolean
     * @example
     * ExpUtils.isWeiXin()  // true
     */
    static isWeiXin(): boolean;
    /**
     * @description 正则表达式是否全部是
     */
    static EXP_CHINESE: RegExp;
    /**
     * @description 判断字符串是否都是中文
     * @param { String } str
     * @return Boolean
     * @example
     * ExpUtils.isChinese('你好，世界')  // false
     * ExpUtils.isChinese('你好')   // true
     * ExpUtils.isChinese('world')   // false
     */
    static isChinese(str: string): boolean;
    /**
     * 测试数据类型的基方法
     */
    static stringType(data: any): string;
    /**
     * 判断是否是 Object
     */
    static isObject(o: any): boolean;
    /**
     * 判断是否是 Array
     */
    static isArray(o: any): boolean;
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
     * ExpUtils.isEmptyObject(obj)   // false
     * ExpUtils.isEmptyObject(obj1)   // true
     */
    static isEmptyObject(obj: any): boolean;
    /**
     * 判断是否是空字符串  多个空格也视为空字符
     * @param str 需要校验的字符串
     * @return Boolean 是否是空字符串
     */
    static isEmptyStr(str: any): boolean;
}
