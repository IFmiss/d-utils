import axios, { AxiosRequestConfig } from 'axios'
import LogUtils from './../logUtils/index'
/**
 * 网页请求的操作
 * axios
 */
export default class HttpRequestUtils {
  /**
   * 设置默认成功的CODE码
   */
  static successCode:number = 200
  static baseUrl: string = ''
  static timeOut: number = 15000
  static isInit: boolean = false

  static init (fn: Function): any {
    HttpRequestUtils.isInit = true
    LogUtils.logInfo('需要自定义aixos的响应拦截以及基本配置: http://www.daiwei.org', `HttpRequestUtils.init => info`)
    fn.call(null, axios, HttpRequestUtils)
    return HttpRequestUtils
  }

  static get (url: string, config?: AxiosRequestConfig): Promise<any> | void {
    if (!HttpRequestUtils.isInit) {
      LogUtils.logError('需要执行HttpRequestUtils.isInit()方法，才可以执行请求操作', `http-request: => error`)
      return
    }
    LogUtils.logWarning('请求开始', `http-request: ${url} [get] => info`)
    axios.get(url, config).then((res: any) => {
      LogUtils.logSuccess(res, `http-request: ${url} [get] => success`)
      Promise.resolve(res)
    }).catch((e: any) => {
      LogUtils.logError(e, `http-request: ${url} [get] => error`)
      Promise.reject(e)
    }).finally(() => {
      LogUtils.logInfo('请求结束', `http-request: ${url} [get] => info`)
    })
  }

  static post (url: string, data?: any, config?: AxiosRequestConfig): Promise<any> | void {
    if (!HttpRequestUtils.isInit) {
      LogUtils.logError('需要执行HttpRequestUtils.isInit()方法，才可以执行请求操作', `http-request: => error`)
      return
    }
    const postInfo:any = Object.assign({}, {data: data}, config)
    LogUtils.logWarning('请求开始', `http-request: ${url} [post] => info`)
    axios.post(url, postInfo).then((res: any) => {
      LogUtils.logSuccess(res, `http-request: ${url} [post] => success`)
      Promise.resolve(res)
    }).catch((e: any) => {
      LogUtils.logError(e, `http-request: ${url} [post] => error`)
      Promise.reject(e)
    }).finally(() => {
      LogUtils.logInfo('请求结束', `http-request: ${url} [post] => info`)
    })
  }
}