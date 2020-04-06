/**
 * @description 返回两个数组之间的差集
 * @param { Array } args 可以是多个数组，两个数组
 * @return { Array } 返回数组
 */
function diffset (a: any[], b: any[]): any[] {
  const setB = new Set(b)
  return a.filter((item) => {
    return !setB.has(item)
  })
}

export default diffset