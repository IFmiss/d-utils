import { GenericType } from "./type";
/**
 * @description 字符串的去除空格
 * @param { String } str 操作的字符串
 * @param { Number } type 类型 0: 去除首位空格；1: 去除所有空格； 2: 去除左边空格； 3： 去除右边空格； 默认为去除首位空格
 * @return { String } 返回操作之后的字符串
 * @example
 * const str = ' d -js- ut ils '
 * 0: 去除首尾空格 默认为0
 * strTrim(str)
 * strTrim(str, 0)
 * @example
 * 1: 去除所有空格
 * strTrim(str, 1)
 * @example
 * 2: 去除左边空格
 * strTrim(str, 2)
 * @example
 * 3: 去除右边空格
 * strTrim(str, 3)
 */
function strTrim(
  str: string,
  type: GenericType.StrTrimType = GenericType.StrTrimType.LEFT_RIGHT
): string {
  if (typeof str !== "string") {
    console.error(
      `str must be string but found ${typeof str}`,
      "[d-utils] GenericUtils strTrim error => "
    );
    return;
  }
  switch (type) {
    case 0:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 1:
      return str.replace(/\s/g, "");
    case 2:
      return str.replace(/(^\s*)/g, "");
    case 3:
      return str.replace(/(\s*$)/g, "");
    default:
      return str.replace(/(^\s*)|(\s*$)/g, "");
  }
}

export default strTrim;
