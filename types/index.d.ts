/**
 * @author ifmiss
 * @version 2.0
 * @description 关于通用js的收录以及整合方便日后使用
 */
import dom from './domUtils/index';
import utils from './genericUtils/index';
import store from './storeUtils/index';
import exp from './expUtils/index';
import device from './deviceUtils/index';
import weixin from './weixinUtils/index';
import performance from './performanceUtils/index';
import log from './logUtils/index';
import url from './urlUtils/index';
import http from './httpRequestUtils/index';
import img from './imageUtils/index';
import event from './eventUtils/index';
export declare const DomUtils: typeof dom;
export declare const PerformanceUtils: typeof performance;
export declare const DeviceUtils: typeof device;
export declare const StoreUtils: typeof store;
export declare const LogUtils: typeof log;
export declare const GenericUtils: typeof utils;
export declare const UrlParse: typeof url;
export declare const WeixinUtils: typeof weixin;
export declare const ExpUtils: typeof exp;
export declare const HttpRequestUtils: typeof http;
export declare const ImageUtils: typeof img;
export declare const EventUtils: typeof event;
declare const _default: {
    DomUtils: typeof dom;
    GenericUtils: typeof utils;
    StoreUtils: typeof store;
    ExpUtils: typeof exp;
    DeviceUtils: typeof device;
    LogUtils: typeof log;
    WeixinUtils: typeof weixin;
    PerformanceUtils: typeof performance;
    UrlParse: typeof url;
    HttpRequestUtils: typeof http;
    ImageUtils: typeof img;
    EventUtils: typeof event;
};
export default _default;
