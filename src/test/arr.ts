export function combineArray (arr: string[]) {
  let result = []
  let len = 0

  const start = (index: number) =>  {
    if (index === arr.length - 1) {
      result.push(arr.join(''))
      len ++
      return
    }

    for (let i = index; i < arr.length; i++) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      start(index + 1);
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }

  start(0)
  return result
}
