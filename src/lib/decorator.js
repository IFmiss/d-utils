/**
 * 修饰器
 */
const decorator = {
  // testable: function (target, name, descriptor) {
  //   console.log(target)
  //   console.log(name)
  //   console.log(descriptor)
  //   target.isTestable = true
  // },

  // // 打印事件
  // log: function() {
  //   return function (target, name, descriptor) {
  //     console.log('target', target)
  //     console.log('name', name)
  //     console.log('descriptor', descriptor)
  //     var oldValue = descriptor.value
  //     descriptor.value = function() {
  //       console.log(`Calling ${name} with`, arguments)
  //       return oldValue.apply(this, arguments)
  //     }
  //     return descriptor
  //   }
  // }
  /**
   * Thunck 函数
   * 相当于后一个方法获取前一个参数并执行
   */
  // thunk: (fn) => {
  //   return function (...args) {
  //     return function (callback) {
  //       return fn.call(this, ...args, callback)
  //     }
  //   }
  // }
}
export default decorator
