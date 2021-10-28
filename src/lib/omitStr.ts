/**
 * @description 格式化替换字符串
 * @param { string } str 需要操作的字符串
 * @param { number } start  开始位置
 * @param { number } end  结束位置 3 的话就是倒数第三个 倒数第三个不被替换
 * @param { string } replaceStr  替换的值 默认 '*'
 * @example
 * console.log(omitStr('185098535', 2, 3, '*'))
 * // 18****535
 */
function omitStr(
  str: string,
  start?: number,
  end?: number,
  replaceStr: string = "*"
): string {
  const startPosition = start || 0;
  const endPosition = end || 0;
  const count = str.length - startPosition - endPosition;
  return (
    str.substr(0, startPosition) +
    replaceStr.repeat(count) +
    str.substr(count + startPosition, end)
  );
}

export default omitStr;
