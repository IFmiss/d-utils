/**
 * 需要安装wx js-sdk
 * 微信相关 api
 */
import wx from 'weixin-js-sdk'
import device from './device'
const weixin = {
  /**
   * @description 初始化微信请求 js-sdk 的url地址 需要区分两种情况
   * IOS 或者 Android 微信版本小于6.3.31, Android 微信版本大于6.3.31
   * 当前这种只支持与VUE单页面模式
   */
  getSdkUrlIosOrLowerAndorid () {
    if (device.isIOS() || device.isAndroid && !this.isUpThanWxVersion('6.3.31')) {
      if (window._d_utils_wx_first_open_url_) return window._d_utils_wx_first_open_url_
      console.error('需要在页面加载的时候全局种植： _d_utils_wx_first_open_url_ 属性， 需要执行 plantSdkUrlIosOrLowerAndorid 方法')
    } else {
      return window.location.href.split('#')[0]
    }
  },

  /**
   * @description IOS 或者 Android 微信版本小于6.3.31 需要种植首次进入页面的URL，用于解决微信签名错误
   */
  plantSdkUrlIosOrLowerAndorid () {
    window._d_utils_wx_first_open_url_ = window.location.href.split('#')[0]
  },

  /**
   * 是否高于微信某一个版本
   */
  isUpThanWxVersion (version) {
    const str = window.navigator.userAgent;
    const v0 = version.split('.');
    const regExp = /MicroMessenger\/([\d|\.]+)/
    if (regExp.exec(str) === null) {
      return false
    }
    const vv = regExp.exec(str) || []
    let v1 = vv[1].split('.')

    if (v1.length >= 4) v1 = v1.slice(0, 3);

    v1 = v1.map((v) => {
        return parseInt(v, 10);
    })
    if (v1[0] > v0[0]) return true
    if (v1[0] === v0[0] && v1[1] > v0[1]) return true
    if (v1[0] === v0[0] && v1[1] === v0[1] && v1[2] >= v0[2]) return true
    return false
  },

  /**
   * 初始化微信配置签名
   * @param { Object } data  微信的签名配置
   * @param { sharInfo } sharInfo 分享所需要的分享信息
   * @returns { Promise } 返回一个promise对象
   */
  initWxShareConfig (data, sharInfo) {
    /**
     * 验证相关信息
     */
    wx.config({
      ...data
    })

    // 返回promise
    return new Promise((resolve, reject) => {
      wx.ready(() => {
        // 分享给好友
        wx.onMenuShareAppMessage({
          title: sharInfo.title,    // 分享的title
          desc: sharInfo.desc,      // 分享描述
          link: sharInfo.link,      // 分享链接
          imgUrl: sharInfo.imgUrl,  // 分享图标
          success: function () {
            resolve('onMenuShareAppMessage')
          },
          cancel: function () {
            reject('onMenuShareAppMessage')
          }
        })

        // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
        // wx.updateAppMessageShareData({
        //   title: sharInfo.title,    // 分享的title
        //   desc: sharInfo.desc,      // 分享描述
        //   link: sharInfo.link,      // 分享链接
        //   imgUrl: sharInfo.imgUrl,  // 分享图标
        //   success: function () {
        //     resolve('updateAppMessageShareData')
        //   },
        //   cancel: function () {
        //     reject('updateAppMessageShareData')
        //   }
        // })

        // 分享到朋友圈
        wx.onMenuShareTimeline({
          title: obj.title,
          link: obj.link, // 分享链接
          imgUrl: obj.imgUrl, // 分享图标
          success: function () {
            resolve('onMenuShareTimeline')
          },
          cancel: function () {
            reject('onMenuShareTimeline')
          }
        })

        // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
        // wx.updateTimelineShareData({
        //   title: sharInfo.title,    // 分享的title
        //   desc: sharInfo.desc,      // 分享描述
        //   link: sharInfo.link,      // 分享链接
        //   imgUrl: sharInfo.imgUrl,  // 分享图标
        //   success: function () {
        //     resolve('updateTimelineShareData')
        //   },
        //   cancel: function () {
        //     reject('updateTimelineShareData')
        //   }
        // })
      })
    })
  }
}

export default weixin
