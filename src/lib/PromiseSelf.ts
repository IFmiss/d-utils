enum PromiseStatus {
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected'
}

export default class PromiseSelf {
  private status = PromiseStatus.Pending
  private value = null;
  private reason = null;
  private executor = null;
  private fulfilledQueue = [];
  private rejectedQueue = [];

  constructor (executor) {
    this.executor = executor
    try {
      this.executor(this.fnResolve, this.fnReject);
    } catch (e) {
      this.fnReject(e)
    }
  }

  public then (onFulfilled?, onRejected?) {
    const onFulfilledSelf = typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    const onRejectedSelf = typeof onRejected === 'function' ? onRejected : (reason) => { throw new Error(reason) }
    // console.log('onFulfilledSelf', onFulfilledSelf)
    // console.log('onRejectedSelf', onRejectedSelf)
    // Fulfilled
    if (this.status === PromiseStatus.Fulfilled) {
      const nextPromise = new PromiseSelf((resolve, reject) => {
        try {
          const x = onFulfilledSelf(this.value);
          this.resolvePromise(nextPromise, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
      return nextPromise
    }
    // Rejected
    if (this.status === PromiseStatus.Rejected) {
      console.log('此时走的是reject', this.reason)
      const nextPromise = new PromiseSelf((resolve, reject) => {
        try {
          console.log(this.reason)
          console.log(onRejectedSelf)
          const x = onRejectedSelf(this.reason);
          console.log('x', x)
          this.resolvePromise(nextPromise, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
      return nextPromise
    }
    // Pending
    if (this.status === PromiseStatus.Pending) {
      const nextPromise = new PromiseSelf((resolve, reject) => {
        this.fulfilledQueue.push(() => {
          try {
            const x = onFulfilledSelf(this.value);
            this.resolvePromise(nextPromise, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
        this.rejectedQueue.push(() => {
          try {
            const x = onRejectedSelf(this.reason);
            this.resolvePromise(nextPromise, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      })
      return nextPromise
    }
  }

  public catch (onRejected) {
    return this.then(null, onRejected)
  }

  private fnResolve = (res: any): void => {
    if (this.status === PromiseStatus.Pending) {
      this.value = res
      this.status = PromiseStatus.Fulfilled
      this.fulfilledQueue.forEach((fn) => {
        fn(this.value)
      })
    }
  }

  private fnReject = (err: any): void => {
    if (this.status === PromiseStatus.Pending) {
      this.reason = err
      this.status = PromiseStatus.Rejected
      this.rejectedQueue.forEach((fn) => {
        fn(this.reason)
      })
    }
  }

  private resolvePromise = (nextPromise, x, resolve, reject) => {
    if (nextPromise === x) {
      reject(new TypeError('不可循环引用'))
    }

    let called;
    if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
      const then = x.then
      try {
        if (typeof then === 'function') {
          then.call(x, (y) => {
            if (called) return
            called = true
            this.resolvePromise(nextPromise, y, resolve, reject)
          }, (e) => {
            if (called) return
            called = true
            reject(e)
          })
        } else {
          resolve(then)
        }
      } catch (e) {
        if (called) return
        called = true
        reject(e)
      }
    } else {
      resolve(x)
    }
  }

  public static resolve (value): any {
    return new PromiseSelf((resolve, reject) => {
      resolve(value)
    })
  }

  public static reject (reason): any {
    return new PromiseSelf((resolve, reject) => {
      reject(reason)
    })
  }

  public static all (promises: any[]) {
    console.log(promises)
    if (!Array.isArray(promises)) {
      throw new TypeError ('参数不是数组')
    }

    return new PromiseSelf((resolve, reject) => {
      try {
        let arr = []
        let count = 0
        
        promises.map((promise: Promise<any>, index: number) => {
          promise.then((y) => {
            count++
            arr[index] = y
            console.log(count === arr.length)
            if (count === arr.length) {
              resolve(arr)
            }
          }, (e) => {
            reject(e)
          })
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  public static race (promises: any[]) {
    if (!Array.isArray(promises)) {
      throw new TypeError ('参数不是数组')
    }

    return new PromiseSelf((resolve, reject) => {
      // promises.map((promise: Promise<any>, index: number) => {
      //   return promise.then(resolve, reject)
      // })
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(resolve, reject);
      }
    })
  }
}
