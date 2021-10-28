/**
 * @description async / await 的错误处理   通过err的条件判断或者!res 的条件判断来走后续流程
 * @param { Promise } promise
 * @return { Array }  array [0] 为err， array[1] 为data
 */
function wrap(promise: Promise<any>) {
  return promise
    .then((res: any) => [null, res])
    .catch((err: any) => [err, null]);
}

export default wrap;
