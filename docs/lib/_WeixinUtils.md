# WeixinUtils
WeixinUtils 是微信公众号相关的操作，主要是微信jssdk，暂时没有测试过，可能会有问题

## wxInfo
`wxInfo`: 属性， wxjssdk的实例

## sdkUrlIosOrAndorid
`plantSdkUrlIosOrAndorid`: 方法，获取请求jssdk的url
`注意`: IOS和微信安卓低版本需要记录第一次进入项目得到url，作为jssdk请求的url，否则会有签名错误
```js
/**
 * @description 初始化微信请求 js-sdk 的url地址 需要区分两种情况
 * IOS 或者 Android 微信版本小于6.3.31, Android 微信版本大于6.3.31
 * 当前这种只支持与VUE单页面模式
 * @returns 返回获取jssdk的url参数值
 */
```
#### `Demo:`
```js
WeixinUtils.sdkUrlIosOrAndorid()
```

## plantSdkUrlIosOrAndorid
`plantSdkUrlIosOrAndorid`: 方法，IOS 或者 Android 微信版本小于6.3.31 需要种植首次进入页面的URL，需要在项目打开的时候执行一次这个方法

## initWxConfig
`initWxConfig`: 初始化微信配置签名
```js
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
```

## wxShare
`wxShare`: 方法， 执行微信分享
```js
/**
 * @description 微信分享初始化
 * @param { Object } sharInfo  分享的内容
 * @props { String } sharInfo.title 分享的title
 * @props { String } sharInfo.desc 分享描述
 * @props { String } sharInfo.link 分享链接
 * @props { String } sharInfo.imgUrl 分享图标
 */
```