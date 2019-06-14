"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 正则校验类
 */
const index_1 = require("./../logUtils/index");
class ExpUtils {
    /**
     * @description 判断是否是移动端
     * @return { Boolean } 返回是否是移动端的布尔值
     * @example
     * ExpUtils.isMobile() // false
     */
    static isMobile() {
        return ExpUtils.EXP_MOBILE.test(ExpUtils.ua);
    }
    /**
     * @description 判断是否是IOS操作系统
     * @return { Boolean } 返回是否是IOS的布尔值
     * @example
     * ExpUtils.isIOS() // false
     */
    static isIOS() {
        return ExpUtils.EXP_IOS.test(ExpUtils.ua);
    }
    /**
     * @description 判断是否是Android操作系统
     * @return { Boolean } 返回是否是Android的布尔值
     * @example
     * ExpUtils.isAndroid() // false
     */
    static isAndroid() {
        return ExpUtils.ua.indexOf('Android') > -1 ||
            ExpUtils.ua.indexOf('Adr') > -1;
    }
    /**
     * @description 判断手机格式是否正确
     * @param { String } num 手机号 字符串
     * @return { Boolean } true是有效  false无效
     * @example
     * ExpUtils.isPhoneNum('13651971940')   // true
     */
    static isPhoneNum(num) {
        if (typeof num !== 'string') {
            index_1.default.logError(`参数需要为string类型，但是发现为: ${typeof num}`, '[d-utils] ExpUtils isPhoneNum error => ');
            return false;
        }
        return ExpUtils.EXP_PHONE_NUM.test(num);
    }
    /**
     * @description 判断email格式是否正确
     * @param { String } email 邮箱名称 字符串
     * @return { Boolean } true是有效  false无效
     * @example
     * ExpUtils.isEmail('185098535@qq.com')  // true
     */
    static isEmail(email) {
        return ExpUtils.EXP_EMAIL.test(email);
    }
    /**
     * @description 判断当前是否是微信浏览器
     * @return Boolean
     * @example
     * ExpUtils.isWeiXin()  // true
     */
    static isWeiXin() {
        const uaLower = ExpUtils.ua.toLowerCase();
        return String(uaLower.match(/MicroMessenger/i)) === 'micromessenger';
    }
    /**
     * @description 判断字符串是否都是中文
     * @param { String } str
     * @return Boolean
     * @example
     * ExpUtils.isChinese('你好，世界')  // false
     * ExpUtils.isChinese('你好')   // true
     * ExpUtils.isChinese('world')   // false
     */
    static isChinese(str) {
        return ExpUtils.EXP_CHINESE.test(str);
    }
    /**
     * 测试数据类型的基方法
     */
    static stringType(data) {
        const s = Object.prototype.toString.call(data);
        return s.match(/\[object (.*?)\]/)[1].toLowerCase();
    }
    /**
     * 判断是否是 Object
     */
    static isObject(o) {
        return ExpUtils.stringType(o) === 'object';
    }
    /**
     * 判断是否是 Array
     */
    static isArray(o) {
        return ExpUtils.stringType(o) === 'array';
    }
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
    static isEmptyObject(obj) {
        if (!ExpUtils.isObject(obj)) {
            index_1.default.logError('参数不是真正的object对象', '[d-utils] ExpUtils isEmptyObject error => ');
            return false;
        }
        return Object.keys(obj).length === 0;
    }
    /**
     * 判断是否是空字符串  多个空格也视为空字符
     * @param str 需要校验的字符串
     * @return Boolean 是否是空字符串
     */
    static isEmptyStr(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '').length > 0;
    }
}
/**
 * @description 浏览器 信息 window.navigator.userAgent
 */
ExpUtils.ua = window.navigator.userAgent;
/**
 * @description 正则表达式 判断是否为移动设备
 */
ExpUtils.EXP_MOBILE = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
/**
 * @description 正则表达式 判断是否为IOS设备
 */
ExpUtils.EXP_IOS = /(iPhone|iPad|iPod|iOS)/i;
/**
 * @description 正则表达式 手机的合法校验 /^1[3-9]\d{9}$/
 */
ExpUtils.EXP_PHONE_NUM = /^1[3-9]\d{9}$/;
/**
 * @description 正则表达式 邮箱是否合法
 */
ExpUtils.EXP_EMAIL = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
/**
 * @description 正则表达式是否全部是
 */
ExpUtils.EXP_CHINESE = /^[\u3220-\uFA29]+$/;
exports.default = ExpUtils;
