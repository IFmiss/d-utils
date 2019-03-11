/**
 * 需要安装wx js-sdk
 * 微信相关 api
 */
import wx from 'weixin-js-sdk'
const weixin = {
  /**
   * @description 初始化微信请求 js-sdk 的url地址 需要区分两种情况
   * IOS 或者 Android 微信版本小于6.3.31, Android 微信版本大于6.3.31
   */
  getRequestSDKUrl () {
    
  },

  /**
   * 初始化微信配置签名
   * @param { Object } data 
   */
  initWeixinConfig (data) {
    wx.config({
      ...data
    })
  }
}