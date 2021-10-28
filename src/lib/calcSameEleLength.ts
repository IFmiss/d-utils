/**
 * @description 判断元素在数组或者字符串里存在的次数
 * @param { Array | String } target 存在的数组或字符串
 * @param { String | Number | ... } s 目标元素  值类型的元素
 * @return { Number } 数量
 */
function calcSameEleLength<T>(target: T[] | string, s: T): number {
  if (typeof s === "string" && s.length > 1)
    throw Error("元素只支持长度为1的字符查询");
  const newTarget = typeof target === "string" ? target.split("") : target;
  return (newTarget as []).reduce((t: number, c: T | string) => {
    return s === c ? t + 1 : t;
  }, 0);
}

export default calcSameEleLength;
