export default class PromiseSelf {
    private status;
    private value;
    private reason;
    private executor;
    private fulfilledQueue;
    private rejectedQueue;
    constructor(executor: any);
    then(onFulfilled?: any, onRejected?: any): PromiseSelf;
    catch(onRejected: any): PromiseSelf;
    private fnResolve;
    private fnReject;
    private resolvePromise;
    static resolve(value: any): any;
    static reject(reason: any): any;
    static all(promises: any[]): PromiseSelf;
    static race(promises: any[]): PromiseSelf;
}
