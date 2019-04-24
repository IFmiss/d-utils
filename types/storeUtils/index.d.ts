/**
 * 数据的操作存储以及数据处理
 */
export default class StoreUtils {
    /**
     * @description 设置Cookie
     * @param { String } name cookie名称
     * @param { String } value cooke的值
     * @param { Number } exp 过期时间 默认2小时 单位毫秒
     * @example
     * // 设置name为test的值为12345，设置过期时间为1小时
     * StoreUtils.setCookie('test', '12345', 60 * 60 * 1000)
     */
    static setCookie(name: string, value: string, exp?: number): void;
    /**
     * @description 获取Cookie
     * @param { String } name cookie名称
     * @returns { (Array | Null) } 返回数据
     * @example
     * StoreUtils.getCookie('test')
     */
    static getCookie(name?: string): string | any;
    /**
     * @description 删除Cookie
     * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
     * @returns { Array } 是一个伪数组
     * @example
     * StoreUtils.removeCookie('test')
     */
    static removeCookie(name: string): any;
    /**
     * @description 从数组中获取num 个随机不重复的元素
     * @param { Arrary } arr 数组
     * @param { Number } num 取出的数量
     * @returns { Arrary } 返回数组集合
     * @example
     * StoreUtils.getRandomDataFromArr([1,2,3,4,5,44,3,2,1,9,0,45,678], 5)
     */
    static randomDataFromArr(arr: any[], num: number): any;
    /**
     * @description 检索数据类型并返回数据类型名称 object array string undefined bool number null 等等...
     * @param { Any } data 要判断的数据
     * @example
     * StoreUtils.checkType('1')   // string
     * @example
     * StoreUtils.checkType({})   // object
     * @example
     * StoreUtils.checkType([])   // array
     * @example
     * StoreUtils.checkType(localStorage)   // storage
     */
    static checkType(data: any): string;
    /**
     * @description 深拷贝
     * @param { Object } obj 被拷贝的对象
     * @return { Object } 返回新的对象
     * @example
     * let a = {
     *   a: 1,
     *   b: 2,
     *   c: 3,
     *   d: [1, 2]
     * }
     * let b = StoreUtils.deepClone(a)
     * a.d[0] = 3
     * console.log(a)
     * // a: {a: 1, b: 2, c: 3, d: [3, 2]}
     * console.log(b)
     * // b: {a: 1, b: 2, c: 3, d: [1, 2]}
     * // 此时修改a.d[0]的值， a对象变化了，b对象没有随之改变
     */
    static deepClone(obj: any): any;
    /**
     * @description extend继承方法 Object.assign(...arg)的包装
     * @param { Any }   参数为object对象
     * @returns { Object } 返回一个新的对象
     * @example
     * StoreUtils.extend({a: 1}, {a: 2})   // {a: 1}
     * ⚠️ Object.assign属于浅拷贝,为了后续的操作不影响到之前的数据,最好在extend的第一个参数设置为{}
     */
    static extend(...arg: any): any;
    /**
     * @description 数组去重
     * @param { Arrary } arr 要去重的arr
     * @return { Array } 返回一个新的数组，不改变原来的数组
     * @example
     * // [1, 2, 3, undefined, "4"]
     * StoreUtils.uniqueArray([1,2,3,3,,3,3,'4',"4",'4',])
     */
    static uniqueArray(arr: any[]): any[];
    /**
     * @description object对象转化成get请求的字符串形式
     * @param { Object } obj  需要操作的对象
     * @return { String } 返回一个字符串 a=1&b=2
     * @example
     * // 'a=1&b=2'
     * StoreUtils.objectToString({a: 1, b: 2})
     */
    static objectToString(obj: any): any;
}
