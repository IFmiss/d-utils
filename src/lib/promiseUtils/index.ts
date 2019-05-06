import LogUtils from './../logUtils'

export default class PromiseUtils {
  static wait (callback: () => boolean, loopTime: number = 100, timeout: number = 10000): Promise<any> | any {
    return new Promise((resolve, reject) => {
      if (typeof callback === 'function' && typeof callback() === 'boolean') {
        const t = setInterval(() => {
          console.log(callback())
          if (callback()) {
            clearTimeout(t)
            clearTimeout(out)
            resolve()
          }
        }, loopTime)

        const out = setTimeout(() => {
          LogUtils.logError('', '[d-utils] PromiseUtils wait timeout')
          clearTimeout(t)
          clearTimeout(out)
          reject()
        }, timeout)
      }
    })
  }
}