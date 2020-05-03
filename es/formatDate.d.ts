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
declare function formatDate(date?: Date, fmt?: string): any;
export default formatDate;
