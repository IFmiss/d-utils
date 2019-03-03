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
}
export default decorator
