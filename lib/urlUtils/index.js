"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    /**
     * 获取url地址的参数信转化成键值对的对象格式
     */
    UrlUtils.parseUrl = function (url) {
        if (url === void 0) { url = window.location.href; }
        var newUrl = url.slice(url.indexOf('?'));
        var arr = newUrl.slice(1).split('&');
        var obj = {};
        arr.forEach(function (item) {
            if (item.split('=')[0])
                obj[item.split('=')[0]] = item.split('=')[1];
        });
        return obj;
    };
    return UrlUtils;
}());
exports.default = UrlUtils;
