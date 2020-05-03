import isObject from './isObject';
/**
  * @description 判断对象是否是空对象
  * @param { Object } 传入的对象
  * @return Boolean 是否是空对象
  * @example
  * let obj = {
  *   a: 1,
  *   b: 2
  * }
  * let obj1 = {}
  * isEmptyObject(obj)   // false
  * isEmptyObject(obj1)   // true
  */
function isEmptyObject(obj) {
    if (!isObject(obj)) {
        return false;
    }
    return Object.keys(obj).length === 0;
}
export default isEmptyObject;
