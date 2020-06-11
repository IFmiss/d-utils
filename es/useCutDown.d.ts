declare function useCutDown(c: number, cb?: Function): {
    waiting: any;
    time: any;
    start: () => void;
    stop: () => void;
    destory: () => void;
};
export default useCutDown;
