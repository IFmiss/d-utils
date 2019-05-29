enum PromiseStatus {
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected'
}

export default class PromiseSelf {
  public status = PromiseStatus.Pending
  public fnResolve: (res: any) => void
  public fnReject: (err: any) => void
  constructor (resolve, reject) {
    this.fnResolve = resolve
    this.fnReject = reject
  }

  public then (res: any) {
    if (this.status === PromiseStatus.Pending) {
      this.status = PromiseStatus.Fulfilled
      this.fnResolve(res)
    } else {
      // 走报错
    }
  }

  // public catch (res: any) {
}
