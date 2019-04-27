"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../expUtils/index");
const index_2 = require("./../logUtils/index");
const wx = require('weixin-js-sdk');
/**
 * 微信相关的工具
 * 微信jssdk的操作
 */
class WeixinUtils {
    /**
     * @description 初始化微信请求 js-sdk 的url地址 需要区分两种情况
     * IOS 或者 Android 微信版本小于6.3.31, Android 微信版本大于6.3.31
     * 当前这种只支持与VUE单页面模式
     * @returns 返回获取jssdk的url参数值
     */
    sdkUrlIosOrAndorid() {
        while (index_1.default.isIOS() ||
            (index_1.default.isAndroid() && !this.isUpThanWxVersion('6.3.31'))) {
            if (window.__D_UTILS_WX_FIRST_URL_HOOK__) {
                return window.__D_UTILS_WX_FIRST_URL_HOOK__;
            }
        }
        return window.location.href.split('#')[0];
    }
    /**
     * @description IOS 或者 Android 微信版本小于6.3.31 需要种植首次进入页面的URL，用于解决微信签名错误
     */
    static plantSdkUrlIosOrAndorid() {
        window.__D_UTILS_WX_FIRST_URL_HOOK__ = window
            .location
            .href
            .split('#')[0];
    }
    /**
     * @description 是否高于微信某一个版本
     * @param { String } version
     * @returns { Boolean } 返回是否满足条件
     */
    isUpThanWxVersion(version) {
        const str = window.navigator.userAgent;
        const v0 = version.split('.');
        const regExp = /MicroMessenger\/([\d|\.]+)/;
        if (regExp.exec(str) === null) {
            return false;
        }
        const vv = regExp.exec(str) || [];
        let v1 = vv[1].split('.');
        if (v1.length >= 4)
            v1 = v1.slice(0, 3);
        v1 = v1.map((v) => {
            return parseInt(v, 10);
        });
        if (v1[0] > v0[0])
            return true;
        if (v1[0] === v0[0] && v1[1] > v0[1])
            return true;
        if (v1[0] === v0[0] && v1[1] === v0[1] && v1[2] >= v0[2])
            return true;
        return false;
    }
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
    static initWxConfig(data) {
        wx.config(Object.assign({}, data));
        wx.error((res) => {
            index_2.default.logError(res, 'wx.config => error');
        });
    }
    /**
     * @description 微信分享初始化
     * @param { Object } sharInfo  分享的内容
     * @props { String } sharInfo.title 分享的title
     * @props { String } sharInfo.desc 分享描述
     * @props { String } sharInfo.link 分享链接
     * @props { String } sharInfo.imgUrl 分享图标
     */
    static wxShare(sharInfo) {
        // 返回promise
        return new Promise((resolve, reject) => {
            wx.ready(() => {
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
    }
}
WeixinUtils.wxInfo = wx;
exports.default = WeixinUtils;
