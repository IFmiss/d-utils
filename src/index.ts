import { omitStr, memo, loadScript, addClass, Log, loadCss } from './lib/index'

const add = memo((a) => {
  console.log(100 + a)
  return 100 + a
})


add(2)
add(2)
loadCss('https://daiwei.site/web_next/_next/static/css/styles.f02299a1.chunk.css')
addClass(document.body, 'd-utils')
Log.info('d-utils')
