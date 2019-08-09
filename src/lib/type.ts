export namespace GenericType {
  export enum StrTrimType {
    /** 去除首尾字符 */
    LEFT_RIGHT,
  
    /** 去除所有空格 */
    ALL,
  
    /** 去除左边的空格 */
    LEFT,
  
    /** 去除右边课空格 */
    RIGHT
  }

  export interface INotification {
    title: string;
    body: string;
    icon: string;
    show: () => void;
    click: () => void;
  }
}
