/**
 * @description 检索数据类型并返回数据类型名称 object array string undefined bool number null 等等...
 * @param { Any } data 要判断的数据
 * @example
 * checkType('1')   // string
 * @example
 * checkType({})   // object
 * @example
 * checkType([])   // array
 * @example
 * checkType(localStorage)   // storage
 */
function checkType<T>(data: T): string {
  const str = Object.prototype.toString.call(data);
  return str.match(/\[object (.*?)\]/)[1].toLowerCase();
}

export default checkType;
