export default class DeviceUtils {
    /**
     * @description 浏览器 信息 window.navigator.userAgent
     */
    static ua: string;
    /**
     * @description 正则表达式 判断是否为移动设备
     */
    static EXP_ISMOBILE: RegExp;
    /**
     * @description 正则表达式 判断是否为IOS设备
     */
    static EXP_IOS: RegExp;
    /**
     * @description 判断是否是移动端
     * @return { Boolean } 返回是否是移动端的布尔值
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_device?id=ismobile
     * @example
     * Dutils.device.isMobile() // false
     */
    static isMobile: () => boolean;
    /**
     * @description 判断是否是IOS操作系统
     * @return { Boolean } 返回是否是IOS的布尔值
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_device?id=isios
     * @example
     * Dutils.device.isIOS() // false
     */
    static isIOS: () => boolean;
    /**
     * @description 判断是否是Android操作系统
     * @return { Boolean } 返回是否是Android的布尔值
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_device?id=isandroid
     * @example
     * Dutils.device.isAndroid() // false
     */
    static isAndroid: () => boolean;
    /**
     * @description 横竖屏的判断,如果是横屏幕显示,显示dom提示竖屏显示
     * @param { String } 提示内容
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_device?id=checklayoutorientation
     * @example
     * Dutils.device.checkLayoutOrientation() // 横屏时候提示 请旋转屏幕，以达到更好的浏览效果
     * @example
     * Dutils.device.checkLayoutOrientation('请竖直使用手机') // 横屏时候提示 请竖直使用手机
     */
    static checkLayoutOrientation: (text?: string) => void;
    /**
     * @description 移动端REM的初始化js的方法，默认基于750的设计稿，可以限制最大显示宽度, 超出需要isFullOverMax 判断是否全屏幕显示, 不全屏则是body居中
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=initRem
     * @param { number }  BaseWidth   基础的设计稿宽度        默认750
     * @param { number }  MaxWidth    移动端最大的比例宽度点   默认document.body.clientWidth
     * @param { boolean } isFullOverMax   超出{MaxWidth}最大宽度的时候是否居中显示(body居中的前提是超出设定的宽度以及isFullOverMax=false) 默认false
     * @example
     * Dutils.utils.initRem()
     */
    static initRem: (BaseWidth?: number, MaxWidth?: number, isFullOverMax?: boolean) => void;
}
