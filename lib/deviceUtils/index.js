"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeviceUtils = /** @class */ (function () {
    function DeviceUtils() {
    }
    /**
     * @description 浏览器 信息 window.navigator.userAgent
     */
    DeviceUtils.ua = window.navigator.userAgent;
    /**
     * @description 正则表达式 判断是否为移动设备
     */
    DeviceUtils.EXP_ISMOBILE = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
    /**
     * @description 正则表达式 判断是否为IOS设备
     */
    DeviceUtils.EXP_IOS = /(iPhone|iPad|iPod|iOS)/i;
    // ==============================================
    // =========== 以下是方法  以上是属性 ===========
    // ==============================================
    /**
     * @description 判断是否是移动端
     * @return { Boolean } 返回是否是移动端的布尔值
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_device?id=ismobile
     * @example
     * Dutils.device.isMobile() // false
     */
    DeviceUtils.isMobile = function () {
        return DeviceUtils.EXP_ISMOBILE.test(DeviceUtils.ua);
    };
    /**
     * @description 判断是否是IOS操作系统
     * @return { Boolean } 返回是否是IOS的布尔值
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_device?id=isios
     * @example
     * Dutils.device.isIOS() // false
     */
    DeviceUtils.isIOS = function () {
        return DeviceUtils.EXP_IOS.test(DeviceUtils.ua);
    };
    /**
     * @description 判断是否是Android操作系统
     * @return { Boolean } 返回是否是Android的布尔值
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_device?id=isandroid
     * @example
     * Dutils.device.isAndroid() // false
     */
    DeviceUtils.isAndroid = function () {
        return DeviceUtils.ua.indexOf('Android') > -1 ||
            DeviceUtils.ua.indexOf('Adr') > -1;
    };
    /**
     * @description 横竖屏的判断,如果是横屏幕显示,显示dom提示竖屏显示
     * @param { String } 提示内容
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_device?id=checklayoutorientation
     * @example
     * Dutils.device.checkLayoutOrientation() // 横屏时候提示 请旋转屏幕，以达到更好的浏览效果
     * @example
     * Dutils.device.checkLayoutOrientation('请竖直使用手机') // 横屏时候提示 请竖直使用手机
     */
    DeviceUtils.checkLayoutOrientation = function (text) {
        if (text === void 0) { text = '请旋转屏幕，以达到更好的浏览效果'; }
        if (!window.hasOwnProperty('orientation'))
            return;
        var ele = null;
        // 0 和 360 的时候是竖屏
        function initOrientation() {
            var ori = window.orientation;
            if (ori === 0 || ori === 360) {
                if (ele) {
                    document.body.removeChild(ele);
                    ele = null;
                }
            }
            else {
                if (ele)
                    return;
                initTipInfo();
            }
        }
        function initTipInfo() {
            ele = document.createElement('div');
            ele.style.cssText = "position: fixed;\n                           top: 0;\n                           left: 0;\n                           right:0;\n                           bottom:0;\n                           display:flex;\n                           align-items:center;\n                           justify-content:center;\n                           font-size: 20px;\n                           background:#fff;\n                           z-index: 19940320;\n                           padding: 40px;";
            ele.innerText = text;
            document.body.appendChild(ele);
        }
        function initEvent() {
            window.addEventListener('orientationchange', function () {
                initOrientation();
            });
        }
        initOrientation();
        initEvent();
    };
    /**
     * @description 移动端REM的初始化js的方法，默认基于750的设计稿，可以限制最大显示宽度, 超出需要isFullOverMax 判断是否全屏幕显示, 不全屏则是body居中
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=initRem
     * @param { number }  BaseWidth   基础的设计稿宽度        默认750
     * @param { number }  MaxWidth    移动端最大的比例宽度点   默认document.body.clientWidth
     * @param { boolean } isFullOverMax   超出{MaxWidth}最大宽度的时候是否居中显示(body居中的前提是超出设定的宽度以及isFullOverMax=false) 默认false
     * @example
     * Dutils.utils.initRem()
     */
    DeviceUtils.initRem = function (BaseWidth, MaxWidth, isFullOverMax) {
        if (BaseWidth === void 0) { BaseWidth = 750; }
        if (MaxWidth === void 0) { MaxWidth = document.body.clientWidth; }
        if (isFullOverMax === void 0) { isFullOverMax = false; }
        var r = {};
        var MaxWidthP = MaxWidth / BaseWidth;
        r.Html = document.getElementsByTagName('html')[0];
        r.intiFontSize = function () {
            var p = parseFloat((document.body.clientWidth / BaseWidth).toFixed(4));
            var s = p > MaxWidthP ? MaxWidthP : p;
            if (isFullOverMax)
                s = p;
            return s;
        };
        r.updateFontSize = function () {
            r.Html.setAttribute('style', 'font-size:' + r.intiFontSize() * 100 + 'px');
            if (!isFullOverMax && document.body.clientWidth >= MaxWidth) {
                document.body.setAttribute('style', 'margin: 0 auto; width: 7.5rem');
            }
        };
        if (!document.addEventListener)
            return;
        window.addEventListener('resize', r.updateFontSize, false);
        document.addEventListener('DOMContentLoaded', r.updateFontSize, false);
    };
    return DeviceUtils;
}());
exports.default = DeviceUtils;
