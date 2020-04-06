import checkType from "./checkType"

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
 * let b = deepClone(a)
 * a.d[0] = 3
 * console.log(a)
 * // a: {a: 1, b: 2, c: 3, d: [3, 2]}
 * console.log(b)
 * // b: {a: 1, b: 2, c: 3, d: [1, 2]}
 * // 此时修改a.d[0]的值， a对象变化了，b对象没有随之改变
 */
function deepClone (obj: any): any {
  console.warn('deepClone 方法暂时没有做对象引用的优化，可食用 lodash 的 cloneDeep 方法')
  const result: any = {}
  const keys: any = Object.keys(obj)
  let type
  for (let k of keys) {
    type = checkType(obj[k])
    switch (type) {
    case 'object':
      result[k] = deepClone(obj[k])
      break
    case 'array':
      result[k] = [].concat(obj[k])
      break
    default:
      result[k] = obj[k]
    }
  }
  return result
}

export default deepClone
