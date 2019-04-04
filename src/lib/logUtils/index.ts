export default class LogUtils {
  static infoColor: string = '#0099FF'
  static successColor: string = '#00CC99'
  static errorColor: string = '#CC3366'
  static warningColor: string = '#CC9966'
  static console = (data: any, dataTitile: string = '数据信息', color: string = '#9E9E9E'): void => {
    console.log(`%c ${dataTitile}`, `color: ${color}; font-weight: bold`, data)
  }

  static logInfo = (data: any, dataTitile: string = 'Info ===>'): void => {
    LogUtils.console(data, dataTitile, LogUtils.infoColor)
  }

  static logSuccess = (data: any, dataTitile: string = 'Sucsess ===>'): void => {
    LogUtils.console(data, dataTitile, LogUtils.successColor)
  }

  static logError = (data: any, dataTitile: string = 'Error ===>'): void => {
    LogUtils.console(data, dataTitile, LogUtils.errorColor)
  }

  static logWarning = (data: any, dataTitile: string = 'Warning ===>'): void => {
    LogUtils.console(data, dataTitile, LogUtils.warningColor)
  }

  /**
   * @description console的美化样式
   * @param { String } text 内容
   * @param { Object } options 配置项，对象，大小背景，和背景颜色设置
   * @property { Boolean } isMax 是否是较大显示console的高度，如果console的内容较多建议设置为false 默认为小格式
   * @property { Array } colors 背景色列表，是一个从左向右渐变的过程
   * @link https://ifmiss.github.io/d-js-utils/#/lib/_utils?id=console
   * @example
   * Dutils.utils.logBeauty('hello world')
   * @example
   * Dutils.utils.logBeauty('这是一个console的方法，可以设置背景色的哦', {
   *  isMax: false,
   *  colors: ['#fa709a', '#fee140', '#ffb199']
   * })
   */
  static logBeauty = (text: string = '未曾遗忘的青春', options?: any): void => {
    if (options && typeof options !== 'object') throw new TypeError(`options is an object, but found ${typeof options}`)
    let data = {
      isMax: false,
      colors: ['#a18cd1', '#fbc2eb', '#8ec5fc']
    }
    let opt = Object.assign({}, data, options)
    if (opt.isMax) {
      console.log(`%c${text}`, `background-size: 100%;background-image: -moz-linear-gradient(left, ${opt.colors.toString()});background-image: -webkit-linear-gradient(left, ${opt.colors.toString()});background-image: linear-gradient(to right, ${opt.colors.toString()});padding:20px 40px;color:#fff;font-size:18px;`)
    } else {
      console.log(`%c${text}`, `background-size: 100%;background-image: -moz-linear-gradient(left, ${opt.colors.toString()});background-image: -webkit-linear-gradient(left, ${opt.colors.toString()});background-image: linear-gradient(to right, ${opt.colors.toString()});padding:2px 5px;color:#fff;font-size:12px;`)
    }
  }
}
