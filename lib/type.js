export var GenericType;
(function (GenericType) {
    let StrTrimType;
    (function (StrTrimType) {
        /** 去除首尾字符 */
        StrTrimType[StrTrimType["LEFT_RIGHT"] = 0] = "LEFT_RIGHT";
        /** 去除所有空格 */
        StrTrimType[StrTrimType["ALL"] = 1] = "ALL";
        /** 去除左边的空格 */
        StrTrimType[StrTrimType["LEFT"] = 2] = "LEFT";
        /** 去除右边课空格 */
        StrTrimType[StrTrimType["RIGHT"] = 3] = "RIGHT";
    })(StrTrimType = GenericType.StrTrimType || (GenericType.StrTrimType = {}));
})(GenericType || (GenericType = {}));
