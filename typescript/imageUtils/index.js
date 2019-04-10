"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageUtils = /** @class */ (function () {
    function ImageUtils() {
        /**
         * 设备像素比
         */
        this.pr = window.devicePixelRatio;
        /**
         * 基于当前屏幕的比例
         */
        this.persent = 1;
        /**
         * canvas的元素
         */
        this.canvas = null;
        /**
         * context canvas 上下文
         */
        this.context = null;
        /**
         * 合并的背景地址
         */
        this.bgSrc = '';
        /**
         * canvas的宽度  实际上数合并背景的宽度
         */
        this.canvasWidth = 0;
        /**
         * canvas的高度  实际上数合并背景的高度
         */
        this.canvasHeight = 0;
    }
    /**
     * 初始化canvas的设置
     * @param { Element } canvas  canvas 元素
     * @return { Promise } 返回
     */
    ImageUtils.prototype.initCanvas = function (canvasRef) {
        var _this = this;
        this.canvas = canvasRef;
        var context = this.canvas.getContext('2d');
        // 绘制canvas结合背景图片
        var img = new Image();
        img.crossOrigin = 'anonymous';
        this.context = context;
        context.save();
        context.scale(1 / this.pr, 1 / this.pr);
        img.src = this.bgSrc;
        return new Promise(function (resolve, reject) {
            img.onload = function () {
                var radio = img.width / img.height;
                _this.canvasWidth = img.width * _this.persent;
                _this.canvasHeight = _this.canvasWidth / radio;
                // 设置canvas的宽高
                _this.canvas.width = _this.canvasWidth;
                _this.canvas.height = _this.canvasHeight;
                context.drawImage(img, 0, 0, _this.canvasWidth, _this.canvasHeight);
                resolve();
            };
            img.onerror = function () {
                console.error('err');
                reject();
            };
        });
    };
    /**
     * canvas合成操作
     * @param canvas
     */
    ImageUtils.prototype.printImage = function (imageInfo) {
        var _this = this;
        var newImageInfo = {
            src: imageInfo.src,
            left: imageInfo.left * this.canvasWidth * this.pr,
            top: imageInfo.top * this.canvasHeight * this.pr,
            width: imageInfo.with * this.canvasWidth * this.pr,
            height: imageInfo.height * this.canvasHeight * this.pr,
            needRound: imageInfo.needRound
        };
        // context
        var img = new Image();
        img.crossOrigin = 'anonymous';
        console.log(this.context);
        this.context.save();
        this.context.scale(1 / this.pr, 1 / this.pr);
        img.src = newImageInfo.src;
        return new Promise(function (resolve, reject) {
            img.onload = function () {
                if (newImageInfo.needRound) {
                    // 走圆形绘制图片 此时都视为正方形
                    _this.context.arc(newImageInfo.width / 2 + newImageInfo.left, newImageInfo.width / 2 + newImageInfo.top, newImageInfo.width / 2, 0, Math.PI * 2, false);
                    _this.context.clip();
                    _this.context.drawImage(img, newImageInfo.left + _this.pr / 2, newImageInfo.top + _this.pr / 2, newImageInfo.width, newImageInfo.width);
                    _this.context.restore();
                }
                else {
                    // 走正常绘制
                    _this.context.drawImage(img, newImageInfo.left, newImageInfo.top, newImageInfo.width, newImageInfo.height);
                    _this.context.restore();
                }
                resolve();
            };
            img.onerror = function () {
                console.error('err');
                reject();
            };
        });
    };
    /**
     * @description canvase转换成图片
     * @return { Image } 返回一个new Image的实例
     * @param canvas
     */
    ImageUtils.prototype.convertCanvasToImage = function (canvas) {
        var image = new Image();
        image.src = canvas.toDataURL('image/png', 1);
        return image;
    };
    return ImageUtils;
}());
exports.default = ImageUtils;
