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
   * 图片显示比例
   */
  pr: number = window.devicePixelRatio

  /**
   * 基于当前屏幕的比例
   */
  persent: number = 1

  /**
   * canvas的元素
   */
  canvas: any = null

  /**
   * 合并的背景地址
   */
  bgSrc: string = ''

  /**
   * canvas的宽度  实际上数合并背景的宽度
   */
  canvasWidth: number = 0

  /**
   * canvas的高度  实际上数合并背景的高度
   */
  canvasHeight: number = 0

  /**
   * 初始化canvas的设置
   * @param canvas 
   */
  initCanvas (canvasRef): any {
    this.canvas = canvasRef
    const context = this.canvas.getContext('2d')

    // 绘制canvas结合背景图片
    const img = new Image()
    img.crossOrigin = 'anonymous'
    context.save()
    context.scale(1 / this.pr, 1 / this.pr)
    img.src = this.bgSrc
    return new Promise ((resolve, reject) => {
      img.onload = () => {
        const radio = img.width / img.height
        this.canvasWidth = img.width * this.persent
        this.canvasHeight = this.canvasWidth / radio
        // 设置canvas的宽高
        this.canvas.width = this.canvasWidth
        this.canvas.height = this.canvasHeight
        context.drawImage(img,
                          0,
                          0,
                          this.canvasWidth,
                          this.canvasHeight)
        resolve(context)
      }
      img.onerror = () => {
        console.error('err')
        reject()
      }
    })
  }

  /**
   * canvas合成操作
   * @param canvas
   */
  printImage (context, imageInfo: ImageInfo) {
    const newImageInfo = {
      src: imageInfo.src,
      left: imageInfo.left * this.canvasWidth * this.pr,
      top: imageInfo.top * this.canvasHeight * this.pr,
      width: imageInfo.with * this.canvasWidth * this.pr,
      height: imageInfo.height * this.canvasHeight * this.pr,
      needRound: imageInfo.needRound
    }
    // context
    const img = new Image()
    img.crossOrigin = 'anonymous'
    console.log(context)
    context.save()
    context.scale(1 / this.pr, 1 / this.pr)
    img.src = newImageInfo.src
    return new Promise ((resolve, reject) => {
      img.onload = () => {
        if (newImageInfo.needRound) {
          // 走圆形绘制图片 此时都视为正方形
          context.arc(newImageInfo.width / 2 + newImageInfo.left,
                      newImageInfo.width / 2 + newImageInfo.top,
                      newImageInfo.width / 2,
                      0,
                      Math.PI * 2,
                      false)
          context.clip()
          context.drawImage(img,
                            newImageInfo.left + this.pr / 2,
                            newImageInfo.top + this.pr / 2,
                            newImageInfo.width,
                            newImageInfo.width)
          context.restore()
        } else {
          // 走正常绘制
          context.drawImage(img, newImageInfo.left,
                                 newImageInfo.top,
                                 newImageInfo.width,
                                 newImageInfo.height)
          context.restore()
        }
        resolve(context)
      }
      img.onerror = () => {
        console.error('err')
        reject()
      }
    })
  }

  /**
   * @description canvase转换成图片
   * @param canvas 
   */
  convertCanvasToImage (canvas: any): any {
    const image = new Image()
    image.src = canvas.toDataURL('image/png', 1)
    return image
  }
}
