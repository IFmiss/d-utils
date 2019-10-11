export declare namespace GenericType {
    enum StrTrimType {
        /** 去除首尾字符 */
        LEFT_RIGHT = 0,
        /** 去除所有空格 */
        ALL = 1,
        /** 去除左边的空格 */
        LEFT = 2,
        /** 去除右边课空格 */
        RIGHT = 3
    }
    interface INotification {
        title: string;
        body: string;
        icon: string;
        show: () => void;
        click: () => void;
    }
}
