import { omitStr, memo } from './lib/index'

const add = memo((a) => {
  console.log(100 + a)
  return 100 + a
})

add(2)
add(2)
