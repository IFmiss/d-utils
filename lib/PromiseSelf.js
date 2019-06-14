"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromiseStatus;
(function (PromiseStatus) {
    PromiseStatus["Pending"] = "pending";
    PromiseStatus["Fulfilled"] = "fulfilled";
    PromiseStatus["Rejected"] = "rejected";
})(PromiseStatus || (PromiseStatus = {}));
class PromiseSelf {
    constructor(executor) {
        this.status = PromiseStatus.Pending;
        this.value = null;
        this.reason = null;
        this.executor = null;
        this.fulfilledQueue = [];
        this.rejectedQueue = [];
        this.fnResolve = (res) => {
            if (this.status === PromiseStatus.Pending) {
                this.value = res;
                this.status = PromiseStatus.Fulfilled;
                this.fulfilledQueue.forEach((fn) => {
                    fn(this.value);
                });
            }
        };
        this.fnReject = (err) => {
            if (this.status === PromiseStatus.Pending) {
                this.reason = err;
                this.status = PromiseStatus.Rejected;
                this.rejectedQueue.forEach((fn) => {
                    fn(this.reason);
                });
            }
        };
        this.resolvePromise = (nextPromise, x, resolve, reject) => {
            if (nextPromise === x) {
                reject(new TypeError('不可循环引用'));
            }
            let called;
            if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
                const then = x.then;
                try {
                    if (typeof then === 'function') {
                        then.call(x, (y) => {
                            if (called)
                                return;
                            called = true;
                            this.resolvePromise(nextPromise, y, resolve, reject);
                        }, (e) => {
                            if (called)
                                return;
                            called = true;
                            reject(e);
                        });
                    }
                    else {
                        resolve(then);
                    }
                }
                catch (e) {
                    if (called)
                        return;
                    called = true;
                    reject(e);
                }
            }
            else {
                resolve(x);
            }
        };
        this.executor = executor;
        try {
            this.executor(this.fnResolve, this.fnReject);
        }
        catch (e) {
            this.fnReject(e);
        }
    }
    then(onFulfilled, onRejected) {
        const onFulfilledSelf = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
        const onRejectedSelf = typeof onRejected === 'function' ? onRejected : (reason) => { throw new Error(reason); };
        // console.log('onFulfilledSelf', onFulfilledSelf)
        // console.log('onRejectedSelf', onRejectedSelf)
        // Fulfilled
        if (this.status === PromiseStatus.Fulfilled) {
            const nextPromise = new PromiseSelf((resolve, reject) => {
                try {
                    const x = onFulfilledSelf(this.value);
                    this.resolvePromise(nextPromise, x, resolve, reject);
                }
                catch (e) {
                    reject(e);
                }
            });
            return nextPromise;
        }
        // Rejected
        if (this.status === PromiseStatus.Rejected) {
            console.log('此时走的是reject', this.reason);
            const nextPromise = new PromiseSelf((resolve, reject) => {
                try {
                    console.log(this.reason);
                    console.log(onRejectedSelf);
                    const x = onRejectedSelf(this.reason);
                    console.log('x', x);
                    this.resolvePromise(nextPromise, x, resolve, reject);
                }
                catch (e) {
                    reject(e);
                }
            });
            return nextPromise;
        }
        // Pending
        if (this.status === PromiseStatus.Pending) {
            const nextPromise = new PromiseSelf((resolve, reject) => {
                this.fulfilledQueue.push(() => {
                    try {
                        const x = onFulfilledSelf(this.value);
                        this.resolvePromise(nextPromise, x, resolve, reject);
                    }
                    catch (e) {
                        reject(e);
                    }
                });
                this.rejectedQueue.push(() => {
                    try {
                        const x = onRejectedSelf(this.reason);
                        this.resolvePromise(nextPromise, x, resolve, reject);
                    }
                    catch (e) {
                        reject(e);
                    }
                });
            });
            return nextPromise;
        }
    }
    catch(onRejected) {
        return this.then(null, onRejected);
    }
    static resolve(value) {
        return new PromiseSelf((resolve, reject) => {
            resolve(value);
        });
    }
    static reject(reason) {
        return new PromiseSelf((resolve, reject) => {
            reject(reason);
        });
    }
    static all(promises) {
        console.log(promises);
        if (!Array.isArray(promises)) {
            throw new TypeError('参数不是数组');
        }
        return new PromiseSelf((resolve, reject) => {
            try {
                let arr = [];
                let count = 0;
                promises.map((promise, index) => {
                    promise.then((y) => {
                        count++;
                        arr[index] = y;
                        console.log(count === arr.length);
                        if (count === arr.length) {
                            resolve(arr);
                        }
                    }, (e) => {
                        reject(e);
                    });
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    static race(promises) {
        if (!Array.isArray(promises)) {
            throw new TypeError('参数不是数组');
        }
        return new PromiseSelf((resolve, reject) => {
            // promises.map((promise: Promise<any>, index: number) => {
            //   return promise.then(resolve, reject)
            // })
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(resolve, reject);
            }
        });
    }
}
exports.default = PromiseSelf;
