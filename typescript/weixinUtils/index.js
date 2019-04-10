"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./../expUtils/index");
var index_2 = require("./../logUtils/index");
var wx = require('weixin-js-sdk');
/**
 * 微信相关的工具
 * 微信jssdk的操作
 */
var WeixinUtils = /** @class */ (function () {
    function WeixinUtils() {
    }
    /**
     * @description 初始化微信请求 js-sdk 的url地址 需要区分两种情况
     * IOS 或者 Android 微信版本小于6.3.31, Android 微信版本大于6.3.31
     * 当前这种只支持与VUE单页面模式
     * @returns 返回获取jssdk的url参数值
     */
    WeixinUtils.sdkUrlIosOrAndorid = function () {
        while (index_1.default.isIOS() ||
            (index_1.default.isAndroid() && !WeixinUtils.isUpThanWxVersion('6.3.31'))) {
            if (window.__D_UTILS_WX_FIRST_URL_HOOK__) {
                return window.__D_UTILS_WX_FIRST_URL_HOOK__;
            }
        }
        return window.location.href.split('#')[0];
    };
    /**
     * @description IOS 或者 Android 微信版本小于6.3.31 需要种植首次进入页面的URL，用于解决微信签名错误
     */
    WeixinUtils.plantSdkUrlIosOrAndorid = function () {
        window.__D_UTILS_WX_FIRST_URL_HOOK__ = window
            .location
            .href
            .split('#')[0];
    };
    /**
     * @description 是否高于微信某一个版本
     * @param { String } version
     * @returns { Boolean } 返回是否满足条件
     */
    WeixinUtils.isUpThanWxVersion = function (version) {
        var str = window.navigator.userAgent;
        var v0 = version.split('.');
        var regExp = /MicroMessenger\/([\d|\.]+)/;
        if (regExp.exec(str) === null) {
            return false;
        }
        var vv = regExp.exec(str) || [];
        var v1 = vv[1].split('.');
        if (v1.length >= 4)
            v1 = v1.slice(0, 3);
        v1 = v1.map(function (v) {
            return parseInt(v, 10);
        });
        if (v1[0] > v0[0])
            return true;
        if (v1[0] === v0[0] && v1[1] > v0[1])
            return true;
        if (v1[0] === v0[0] && v1[1] === v0[1] && v1[2] >= v0[2])
            return true;
        return false;
    };
    /**
     * @description 初始化微信配置签名
     * @param { Object } data  微信的签名配置
     * @props { Boolean } data.debug  开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
     * @props { String } data.appId  必填，公众号的唯一标识
     * @props { Number } data.timestamp  必填，生成签名的时间戳
     * @props { String } data.nonceStr  必填，生成签名的随机串
     * @props { String } data.signature  必填，签名
     * @props { Array } data.jsApiList  必填，需要使用的JS接口列表
     * @link 接口列表地址 https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
     */
    WeixinUtils.initWxConfig = function (data) {
        wx.config(__assign({}, data));
        wx.error(function (res) {
            index_2.default.logError(res, 'wx.config => error');
        });
    };
    /**
     * @description 微信分享初始化
     * @param { Object } sharInfo  分享的内容
     * @param { String } sharInfo.title 分享的title
     * @param { String } sharInfo.desc 分享描述
     * @param { String } sharInfo.link 分享链接
     * @param { String } sharInfo.imgUrl 分享图标
     */
    WeixinUtils.wxShare = function (sharInfo) {
        // 返回promise
        return new Promise(function (resolve, reject) {
            wx.ready(function () {
                // 分享给好友
                wx.onMenuShareAppMessage({
                    title: sharInfo.title,
                    desc: sharInfo.desc,
                    link: sharInfo.link,
                    imgUrl: sharInfo.imgUrl,
                    success: function () {
                        resolve('onMenuShareAppMessage');
                    },
                    cancel: function () {
                        reject('onMenuShareAppMessage');
                    }
                });
                // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
                // wx.updateAppMessageShareData({
                //   title: sharInfo.title,
                //   desc: sharInfo.desc,
                //   link: sharInfo.link,
                //   imgUrl: sharInfo.imgUrl,
                //   success: function () {
                //     resolve('updateAppMessageShareData')
                //   },
                //   cancel: function () {
                //     reject('updateAppMessageShareData')
                //   }
                // })
                // 分享到朋友圈
                wx.onMenuShareTimeline({
                    title: sharInfo.title,
                    link: sharInfo.link,
                    imgUrl: sharInfo.imgUrl,
                    success: function () {
                        resolve('onMenuShareTimeline');
                    },
                    cancel: function () {
                        reject('onMenuShareTimeline');
                    }
                });
                // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
                // wx.updateTimelineShareData({
                //   title: sharInfo.title,
                //   desc: sharInfo.desc,
                //   link: sharInfo.link,
                //   imgUrl: sharInfo.imgUrl,
                //   success: function () {
                //     resolve('updateTimelineShareData')
                //   },
                //   cancel: function () {
                //     reject('updateTimelineShareData')
                //   }
                // })
            });
        });
    };
    WeixinUtils.wxInfo = wx;
    return WeixinUtils;
}());
exports.default = WeixinUtils;
