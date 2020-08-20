/**
 * 支持相同版本号格式比较
 * @param current 当前版本
 * @param compare 比对的版本
 * @return { boolean } LESS_THAN 小于  EQUAL 等于  MORE_THAN 大于
 * @example
 * versionCompare("1.2.3", "1.2.4")  // LESS_THAN
 * versionCompare("1.2.3", "1.2.3")  // EQUAL
 * versionCompare("2.2.3", "1.2.3")  // MORE_THAN
 */

export type RESULT_STATE = "UN_DEFINED" | "LESS_THAN" | "EQUAL" | "MORE_THAN";


function versionCompare(v1: string, v2: string): RESULT_STATE {
  let arrV1 = v1.split('.');
  let arrV2 = v2.split('.');
  let newLength;
  let result: RESULT_STATE = "UN_DEFINED";

  // 记录初始化的length
  const baseV1l = newLength = arrV1.length;
  const baseV2l = arrV2.length;

  if (baseV1l !== baseV2l) {
    if (baseV1l > baseV2l) {
      arrV2 = arrV2.concat(Array(baseV1l - baseV2l).fill('0'));
      newLength = baseV1l;
    } else {
      arrV1 = arrV1.concat(Array(baseV2l - baseV1l).fill('0'));
      newLength = baseV2l;
    }
  }

  let i = 0;
  while (i < newLength && result == "UN_DEFINED") {
    if (Number(arrV1[i]) > Number(arrV2[i])) {
      result = "MORE_THAN";
    }
    if (Number(arrV1[i]) < Number(arrV2[i])) {
      result = "LESS_THAN";
    }
    if (Number(arrV1[i]) == Number(arrV2[i]) && i == newLength - 1) {
      result = "EQUAL";
    }
    i++;
  }
  return result;
}

export default versionCompare;
