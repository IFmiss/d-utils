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
import promise from './promiseUtils/index';
/**
 * Dom相关静态类
 */
export declare const DomUtils: typeof dom;
/**
 * 性能相关静态类
 */
export declare const PerformanceUtils: typeof performance;
/**
 * 设备相关静态类
 */
export declare const DeviceUtils: typeof device;
/**
 * 数据存储静态类
 */
export declare const StoreUtils: typeof store;
/**
 * 日志 打印静态类
 */
export declare const LogUtils: typeof log;
/**
 * 通用工具静态类
 */
export declare const GenericUtils: typeof utils;
/**
 * url相关
 */
export declare const UrlUtils: typeof url;
/**
 * 微信相关
 */
export declare const WeixinUtils: typeof weixin;
/**
 * 正则相关静态类
 */
export declare const ExpUtils: typeof exp;
/**
 * axios二次封装
 */
export declare const HttpRequestUtils: typeof http;
/**
 * 图片合成类
 */
export declare const ImageUtils: typeof img;
/**
 * 事件相关
 */
export declare const EventUtils: typeof event;
/**
 * promise相关
 */
export declare const PromiseUtils: typeof promise;
