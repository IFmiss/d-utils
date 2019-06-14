import { IWxSign, IWxShareToFriend, IWxShareToFriendsCircle, IWxConfig } from './types';
/**
 * 微信相关的工具
 * 微信jssdk的操作
 */
export default class WeixinUtils {
    static wx: any;
    /**
     * @description 初始化微信请求 js-sdk 的url地址 需要区分两种情况
     * IOS 或者 Android 微信版本小于6.3.31, Android 微信版本大于6.3.31
     * 当前这种只支持与VUE单页面模式
     * @returns 返回获取jssdk的url参数值
     */
    private static defaultShareInfo;
    static sdkUrlIosOrAndorid(): string;
    /**
     * @description IOS 或者 Android 微信版本小于6.3.31 需要种植首次进入页面的URL，用于解决微信签名错误
     */
    static plantSdkUrlIosOrAndorid(): void;
    /**
     * @description wxSign
     * @param { String }  jsapi_ticket  公众号用于调用微信JS接口的临时票据
     */
    static wxSign(ticket: string): IWxSign;
    /**
     * 跳转微信oauth2授权登录
     * @param { String }  appId
     */
    static routerAuthorized(appId: string): void;
    /**
     * randomWord 产生任意长度随机字母数字组合
     * min-任意长度最小位[固定位数]
     * max-任意长度最大位
     */
    private static randomWord;
    /**
     * @description 是否高于微信某一个版本
     * @param { String } version
     * @returns { Boolean } 返回是否满足条件
     */
    private static isUpThanWxVersion;
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
    static initWxConfig(config: IWxConfig): void;
    /**
     * 分享给朋友
     * @param {Object} sharInfo
     * @props { String } sharInfo.title 分享的title
     * @props { String } sharInfo.desc 分享描述
     * @props { String } sharInfo.link 分享链接
     * @props { String } sharInfo.imgUrl 分享图标
     */
    static wxShareToFriend(sharInfo: IWxShareToFriend): Promise<string>;
    /**
     * 分享到朋友圈
     * @param {Object} sharInfo
     * @props { String } sharInfo.title 分享的title
     * @props { String } sharInfo.link 分享链接
     * @props { String } sharInfo.imgUrl 分享图标
     */
    static wxShareToFriendCircle(sharInfo: IWxShareToFriendsCircle): Promise<string>;
    /**
     * 隐藏所有非基础按钮接口
     */
    static hideAllNonBaseMenuItem(): Promise<string | object>;
    /**
     * 批量隐藏功能按钮接口
     * @param { array } arr // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     */
    static hideMenuItems(arr?: string[]): Promise<string | object>;
    /**
     * @description 微信分享初始化
     * @param { Object } sharInfo  分享的内容
     * @props { String } sharInfo.title 分享的title
     * @props { String } sharInfo.desc 分享描述
     * @props { String } sharInfo.link 分享链接
     * @props { String } sharInfo.imgUrl 分享图标
     */
    static wxShare(sharInfo: any): Promise<string>;
}
