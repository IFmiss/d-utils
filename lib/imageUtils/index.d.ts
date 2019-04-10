/**
 * 图片合成等操作
 */
interface ImageInfo {
    src: string;
    with: number;
    height: number;
    left: number;
    top: number;
    needRound: boolean;
}
export default class ImageUtils {
    /**
     * 设备像素比
     */
    pr: number;
    /**
     * 基于当前屏幕的比例
     */
    persent: number;
    /**
     * canvas的元素
     */
    canvas: any;
    /**
     * context canvas 上下文
     */
    context: any;
    /**
     * 合并的背景地址
     */
    bgSrc: string;
    /**
     * canvas的宽度  实际上数合并背景的宽度
     */
    canvasWidth: number;
    /**
     * canvas的高度  实际上数合并背景的高度
     */
    canvasHeight: number;
    /**
     * 初始化canvas的设置
     * @param { Element } canvas  canvas 元素
     * @return { Promise } 返回
     */
    initCanvas(canvasRef: any): any;
    /**
     * canvas合成操作
     * @param canvas
     */
    printImage(imageInfo: ImageInfo): Promise<{}>;
    /**
     * @description canvase转换成图片
     * @return { Image } 返回一个new Image的实例
     * @param canvas
     */
    convertCanvasToImage(canvas: any): any;
}
export {};
