import checkType from './checkType'

/**
 * 判断是否是 Object
 */
function isObject (o: any): boolean {
  return checkType(o) === 'object'
}

export default isObject
