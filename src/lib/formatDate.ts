/**
 * @description 日期格式化 可转换成自己想要的格式
 * @param { Date } date 日期内容  如 当前日期 new Date()
 * @param { String } fmt 格式模板 'yyyy-MM-dd hh:mm:ss'
 * @return { String } '2018-08-15 01:46:22'
 * @example
 * formatDate(new Date(), `yyyy-MM-dd hh:mm:ss`)
 * @example
 * formatDate(new Date(), `yyyy-MM-dd`)
 */
function formatDate(
  date: Date = new Date(),
  fmt: string = "yyyy-MM-dd hh:mm:ss"
): any {
  // author: meizz
  const newDate = new Date(date);
  const o: object = {
    "M+": newDate.getMonth() + 1, // 月份
    "d+": newDate.getDate(), // 日
    "h+": newDate.getHours(), // 小时
    "m+": newDate.getMinutes(), // 分
    "s+": newDate.getSeconds(), // 秒
    "q+": ~~((newDate.getMonth() + 3) / 3), // 季度
    S: newDate.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (newDate.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}

export default formatDate;
