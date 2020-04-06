/**
 * @description 判断元素在数组或者字符串里存在的次数
 * @param { Array | String } target 存在的数组或字符串
 * @param { String | Number | ... } s 目标元素  值类型的元素
 * @return { Number } 数量
 */
function calcQuantity (target: any[] | string, s: any) {
  let newTarget = typeof target === 'string' ? target.split('') : target
  return newTarget.reduce((t, c) => {
    return s === c ? t + 1 : t
  }, 0)
}

export default calcQuantity
