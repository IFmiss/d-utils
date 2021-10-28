/**
 * @description 正则表达式 手机的合法校验 /^1[3-9]\d{9}$/
 */
export const EXP_PHONE_NUM: RegExp = /^1[3-9]\d{9}$/;

/**
 * @description 判断手机格式是否正确
 * @param { String } num 手机号 字符串
 * @return { Boolean } true是有效  false无效
 * @example
 * isPhoneNum('13651971940')   // true
 */
function isPhoneNum(num: string): boolean {
  if (typeof num !== "string") {
    return false;
  }
  return EXP_PHONE_NUM.test(num);
}

export default isPhoneNum;
