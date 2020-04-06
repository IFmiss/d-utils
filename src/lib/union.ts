/**
 * @description 返回数组之间的并集
 * @param { Array } args 可以是多个数组，数量不限制
 * @return { Array } 返回数组
 */
function union (...args: any[]): any[] {
  return Array.from(new Set([].concat(...args)))
}

export default union
