/**
 * @description 睡眠, 阻塞代码 timer毫秒
 * @param { number } timer  睡眠时长  执行后续的操作
 * @return promise
 */
declare function sleep(timer: any): Promise<unknown>;
export default sleep;
