interface Resourse {
    content: string;
    left: number;
    top: number;
    needRound: boolean;
    type: string;
    fanmily?: string;
    color?: string;
    width?: number;
    maxWidth?: number;
    height?: number;
}
export default class ImageUtils {
    /**
     * 设备像素比
     */
    private pr;
    /**
     * 基于当前屏幕的比例
     */
    persent: number;
    /**
     * canvas的元素
     */
    private canvas;
    /**
     * context canvas 上下文
     */
    private context;
    /**
     * 合并的背景地址
     */
    private mainResource;
    /**
     * canvas的宽度  实际上数合并背景的宽度
     */
    private canvasWidth;
    /**
     * canvas的高度  实际上数合并背景的高度
     */
    private canvasHeight;
    constructor(backgroud: string, persent?: number);
    /**
     * 资源列表
     */
    private resourceList;
    addSourse(resourse: Resourse): ImageUtils;
    /**
     * 加载图片
     */
    private loadResourse;
    private composeMainResource;
    /**
     * @description cavans绘制效果
     * @param image addSourse 添加的数据信息
     */
    private renderResource;
    /**
     * 初始化canvas的设置
     * @param { Element } canvas  canvas 元素
     * @return { Promise } 返回合成成功的image对象信息
     */
    compose(): Promise<any>;
    /**
     * @description canvase转换成图片
     * @return { Image } 返回一个new Image的实例
     * @param canvas
     */
    convertCanvasToImage(): any;
}
export {};
