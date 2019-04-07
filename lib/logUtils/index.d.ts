export default class LogUtils {
    /**
     * 提示色  '#0099FF'   蓝色
     */
    static infoColor: string;
    /**
     * 提示色  '#00CC99'   绿色
     */
    static successColor: string;
    /**
     * 提示色  '#CC3366'   红色
     */
    static errorColor: string;
    /**
     * 提示色  '#CC9966'   黄色
     */
    static warningColor: string;
    /**
     * console提示信息
     * @param { any } data  打印的数据信息
     * @param { string } dataTitile  提示文案
     * @param { string } color  颜色
     */
    static console: (data: any, dataTitile?: string, color?: string) => void;
    /**
     * logInfo提示信息
     * @param { any } data  打印的数据信息
     * @param { string } dataTitile  提示文案
     */
    static logInfo: (data: any, dataTitile?: string) => void;
    /**
     * logSuccess提示信息
     * @param { any } data  打印的数据信息
     * @param { string } dataTitile  提示文案
     */
    static logSuccess: (data: any, dataTitile?: string) => void;
    /**
     * logError提示信息
     * @param { any } data  打印的数据信息
     * @param { string } dataTitile  提示文案
     */
    static logError: (data: any, dataTitile?: string) => void;
    /**
     * logWarning提示信息
     * @param { any } data  打印的数据信息
     * @param { string } dataTitile  提示文案
     */
    static logWarning: (data: any, dataTitile?: string) => void;
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
    static logBeauty: (text?: string, options?: any) => void;
}
