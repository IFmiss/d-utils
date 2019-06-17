import ExpUtils from './../expUtils/index';
import LogUtils from './../logUtils/index';
const wx = require('weixin-js-sdk');
const sha1 = require('sha1');
/**
 * 微信相关的工具
 * 微信jssdk的操作
 */
export default class WeixinUtils {
    static sdkUrlIosOrAndorid() {
        if (ExpUtils.isIOS() ||
            ExpUtils.isAndroid() && !WeixinUtils.isUpThanWxVersion('6.3.31')) {
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
        if (!window.__D_UTILS_WX_FIRST_URL_HOOK__) {
            window.__D_UTILS_WX_FIRST_URL_HOOK__ = window
                .location
                .href
                .split('#')[0];
        }
    }
    /**
     * @description wxSign
     * @param { String }  jsapi_ticket  公众号用于调用微信JS接口的临时票据
     */
    static wxSign(ticket) {
        const nonceStr = WeixinUtils.randomWord(16);
        const timestamp = (Date.now() + '').substr(0, 10);
        const url = WeixinUtils.sdkUrlIosOrAndorid();
        const str = `jsapi_ticket=${ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`;
        const signature = sha1(str);
        return { timestamp, nonceStr, signature };
    }
    /**
     * 跳转微信oauth2授权登录
     * @param { String }  appId
     */
    static routerAuthorized(appId) {
        let redirectUrl = window.location.href;
        redirectUrl = encodeURIComponent(redirectUrl);
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`;
    }
    /**
     * randomWord 产生任意长度随机字母数字组合
     * min-任意长度最小位[固定位数]
     * max-任意长度最大位
     */
    static randomWord(min, max) {
        let str = '';
        let range = min;
        const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        // 随机产生
        if (max && max > min) {
            range = Math.round(Math.random() * (max - min)) + min;
        }
        else {
            for (let i = 0; i < range; i++) {
                const pos = Math.round(Math.random() * (arr.length - 1));
                str += arr[pos];
            }
        }
        return str;
    }
    /**
     * @description 是否高于微信某一个版本
     * @param { String } version
     * @returns { Boolean } 返回是否满足条件
     */
    static isUpThanWxVersion(version) {
        const str = window.navigator.userAgent;
        const v0 = version.split('.').map((v) => {
            return parseInt(v, 10);
        });
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
    static initWxConfig(config) {
        wx.config(Object.assign({}, {
            debug: false
        }, config));
        wx.error((res) => {
            LogUtils.logError(res, '[d-utils] wx.config error => ');
        });
    }
    /**
     * 分享给朋友
     * @param {Object} sharInfo
     * @props { String } sharInfo.title 分享的title
     * @props { String } sharInfo.desc 分享描述
     * @props { String } sharInfo.link 分享链接
     * @props { String } sharInfo.imgUrl 分享图标
     * @props { Function } sharInfo.success 成功的回调
     * @props { Function } sharInfo.cancel  取消的回调
     * @props { Function } sharInfo.complete 完成的回调
     */
    static wxShareToFriend(sharInfo) {
        const selfShareInfo = Object.assign({}, this.defaultShareInfo, sharInfo);
        return new Promise((resolve, reject) => {
            try {
                wx.ready(() => {
                    wx.onMenuShareAppMessage({
                        title: selfShareInfo.title,
                        desc: selfShareInfo.desc,
                        link: selfShareInfo.link,
                        imgUrl: selfShareInfo.imgUrl,
                        success: function (res) {
                            selfShareInfo.success({
                                type: 'onMenuShareAppMessage',
                                data: res
                            });
                            resolve('onMenuShareAppMessage');
                        },
                        cancel: function (res) {
                            selfShareInfo.cancel({
                                type: 'onMenuShareAppMessage',
                                data: res
                            });
                            resolve('onMenuShareAppMessage');
                        },
                        complete: function (res) {
                            selfShareInfo.complete({
                                type: 'onMenuShareAppMessage',
                                data: res
                            });
                            resolve('onMenuShareAppMessage');
                        }
                    });
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    /**
     * 分享到朋友圈
     * @param {Object} sharInfo
     * @props { String } sharInfo.title 分享的title
     * @props { String } sharInfo.link 分享链接
     * @props { String } sharInfo.imgUrl 分享图标
     * @props { Function } sharInfo.success 成功的回调
     * @props { Function } sharInfo.cancel  取消的回调
     * @props { Function } sharInfo.complete 完成的回调
     */
    static wxShareToFriendCircle(sharInfo) {
        const selfShareInfo = Object.assign({}, this.defaultShareInfo, sharInfo);
        return new Promise((resolve, reject) => {
            try {
                wx.ready(() => {
                    wx.onMenuShareTimeline({
                        title: selfShareInfo.title,
                        link: selfShareInfo.link,
                        imgUrl: selfShareInfo.imgUrl,
                        success: function (res) {
                            selfShareInfo.success({
                                type: 'onMenuShareTimeline',
                                data: res
                            });
                            resolve('onMenuShareTimeline');
                        },
                        cancel: function (res) {
                            selfShareInfo.cancel({
                                type: 'onMenuShareTimeline',
                                data: res
                            });
                            resolve('onMenuShareTimeline');
                        },
                        complete: function (res) {
                            selfShareInfo.complete({
                                type: 'onMenuShareTimeline',
                                data: res
                            });
                            resolve('onMenuShareTimeline');
                        }
                    });
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    /**
     * 隐藏所有非基础按钮接口
     */
    static hideAllNonBaseMenuItem() {
        return new Promise((resolve, reject) => {
            wx.ready(() => {
                try {
                    wx.hideAllNonBaseMenuItem();
                    const data = {
                        type: 'hideAllNonBaseMenuItem',
                        data: '成功'
                    };
                    resolve(data);
                }
                catch (e) {
                    const data = {
                        type: 'hideAllNonBaseMenuItem',
                        data: e
                    };
                    reject(data);
                }
            });
        });
    }
    /**
     * 批量隐藏功能按钮接口
     * @param { array } arr // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     */
    static hideMenuItems(arr = []) {
        return new Promise((resolve, reject) => {
            wx.ready(() => {
                try {
                    wx.hideMenuItems({
                        menuList: arr
                    });
                    const data = {
                        type: 'hideMenuItems',
                        data: `成功, 隐藏的数组名称: ${arr}`
                    };
                    resolve(data);
                }
                catch (e) {
                    const data = {
                        type: 'hideMenuItems',
                        data: e
                    };
                    reject(data);
                }
            });
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
                    },
                    complete: function () {
                        resolve('onMenuShareAppMessage');
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
                    },
                    complete: function () {
                        resolve('onMenuShareTimeline');
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
WeixinUtils.wx = wx;
/**
 * @description 初始化微信请求 js-sdk 的url地址 需要区分两种情况
 * IOS 或者 Android 微信版本小于6.3.31, Android 微信版本大于6.3.31
 * 当前这种只支持与VUE单页面模式
 * @returns 返回获取jssdk的url参数值
 */
WeixinUtils.defaultShareInfo = {
    title: '这是一个微信分享的title',
    desc: '这是一个微信分享的desc',
    link: '这是一个微信分享的link',
    imgUrl: '这是一个微信分享的imgUrl',
    success: () => { },
    cancel: () => { },
    complete: () => { }
};
