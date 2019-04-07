"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StoreUtils = /** @class */ (function () {
    function StoreUtils() {
    }
    /**
     * @description 设置Cookie
     * @param { String } name cookie名称
     * @param { String } value cooke的值
     * @param { Number } exp 过期时间 默认2小时 单位毫秒
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=setcookie
     * @example
     * // 设置name为test的值为12345，设置过期时间为1小时
     * Dutils.store.setCookie('test', '12345', 60 * 60 * 1000)
     */
    StoreUtils.setCookie = function (name, value, exp) {
        if (exp === void 0) { exp = 60 * 60 * 2 * 1000; }
        var date = new Date();
        date.setTime(date.getTime() + exp);
        document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
    };
    /**
     * @description 获取Cookie
     * @param { String } name cookie名称
     * @returns { (Array | Null) } 返回数据
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=getcookie
     * @example
     * Dutils.store.getCookie('test')
     */
    StoreUtils.getCookie = function (name) {
        if (name) {
            var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            var arr = document.cookie.match(reg);
            return arr && arr[2] ? arr[2] : null;
        }
        var getAllCookies = [];
        if (document.cookie.length) {
            var arrCookie = document
                .cookie
                .split('; ');
            for (var k in arrCookie) {
                getAllCookies.push({
                    name: "" + unescape(arrCookie[k].split('=')[0]),
                    value: "" + unescape(arrCookie[k].split('=')[1])
                });
            }
            return getAllCookies;
        }
        else {
            return null;
        }
    };
    /**
     * @description 删除Cookie
     * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=rmcookie
     * @returns { Array } 是一个伪数组
     * @example
     * Dutils.store.rmCookie('test')
     */
    StoreUtils.removeCookie = function (name) {
        var date = new Date();
        date.setTime(date.getTime() - 1);
        if (name) {
            var cookieInfo = StoreUtils.getCookie(name);
            if (cookieInfo !== null) {
                document.cookie = name + "=" + cookieInfo + ";expires=" + date.toUTCString();
            }
            return;
        }
        var allCookies = StoreUtils.getCookie();
        for (var k in allCookies) {
            document.cookie = allCookies[k].name + "=" + allCookies[k].value + ";expires=" + date.toUTCString();
        }
    };
    /**
     * @description 从数组中获取num 个随机不重复的元素
     * @param { Arrary } arr 数组
     * @param { Number } num 取出的数量
     * @returns { Arrary } 返回数组集合
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=getrandomdatafromarr
     * @example
     * Dutils.store.getRandomDataFromArr([1,2,3,4,5,44,3,2,1,9,0,45,678], 5)
     */
    StoreUtils.randomDataFromArr = function (arr, num) {
        var newArr = Array.from(new Set(arr));
        var l = newArr.length;
        var resultArr = new Array();
        if (!(num > 0))
            throw new Error('数量必须大于0');
        if (newArr) {
            for (var i = 0; i < (num > l ? l : num); i++) {
                var index = Math.floor(Math.random() * newArr.length);
                resultArr.push(newArr[index]);
                newArr.splice(index, 1);
            }
            return resultArr;
        }
    };
    /**
     * @description 检索数据类型并返回数据类型名称 object array string undefined bool number null 等等...
     * @param { Any } data 要判断的数据
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=checktype
     * @example
     * Dutils.store.checkType('1')   // string
     * @example
     * Dutils.store.checkType({})   // object
     * @example
     * Dutils.store.checkType([])   // array
     * @example
     * Dutils.store.checkType(localStorage)   // storage
     */
    StoreUtils.checkType = function (data) {
        var str = Object.prototype.toString.call(data);
        return str
            .substring(1, str.length - 1)
            .split(' ')[1]
            .toLowerCase();
    };
    /**
     * @description 深拷贝
     * @param { Object } obj 被拷贝的对象
     * @return { Object } 返回新的对象
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=deepclone
     * @example
     * let a = {
     *   a: 1,
     *   b: 2,
     *   c: 3,
     *   d: [1, 2]
     * }
     * let b = Dutils.store.deepClone(a)
     * a.d[0] = 3
     * console.log(a)
     * // a: {a: 1, b: 2, c: 3, d: [3, 2]}
     * console.log(b)
     * // b: {a: 1, b: 2, c: 3, d: [1, 2]}
     * // 此时修改a.d[0]的值， a对象变化了，b对象没有随之改变
     */
    StoreUtils.deepClone = function (obj) {
        var result = {};
        var keys = Object.keys(obj);
        var type;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var k = keys_1[_i];
            type = StoreUtils.checkType(obj[k]);
            switch (type) {
                case 'object':
                    result[k] = StoreUtils.deepClone(obj[k]);
                    break;
                case 'array':
                    result[k] = [].concat(obj[k]);
                    break;
                default:
                    result[k] = obj[k];
            }
        }
        return result;
    };
    /**
     * @description extend继承方法 Object.assign(...arg)的包装
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=extend
     * @param { Any }   参数为object对象
     * @returns { Object } 返回一个新的对象
     * @example
     * Dutils.store.extend({a: 1}, {a: 2})   // {a: 1}
     * ⚠️ Object.assign属于浅拷贝,为了后续的操作不影响到之前的数据,最好在extend的第一个参数设置为{}
     */
    StoreUtils.extend = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        return StoreUtils.deepClone(Object.assign.apply(Object, [{}].concat(arg)));
    };
    /**
     * @description 数组去重
     * @param { Arrary } arr 要去重的arr
     * @return { Array } 返回一个新的数组，不改变原来的数组
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=uniquearray
     * @example
     * // [1, 2, 3, undefined, "4"]
     * Dutils.store.uniqueArray([1,2,3,3,,3,3,'4',"4",'4',])
     */
    StoreUtils.uniqueArray = function (arr) {
        return Array.from(new Set(arr));
    };
    /**
     * @description object对象转化成get请求的字符串形式
     * @param { Object } obj  需要操作的对象
     * @return { String } 返回一个字符串 a=1&b=2
     * @link https://ifmiss.github.io/d-js-utils/#/lib/_store?id=objectToString
     * @example
     * // 'a=1&b=2'
     * Dutils.store.objectToString({a: 1, b: 2})
     */
    StoreUtils.objectToString = function (obj) {
        return Object.keys(obj).reduce(function (prevAll, currentItem, index) {
            var prev = index > 1 ? prevAll : prevAll + "=" + obj[prevAll];
            var current = currentItem + "=" + obj[currentItem];
            return prev + "&" + current;
        });
    };
    return StoreUtils;
}());
exports.default = StoreUtils;
