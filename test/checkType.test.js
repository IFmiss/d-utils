const checkType = require('./../src/lib/checkType').default

describe('checkType', function() {
  test('判断字符串类型', function() {
    expect(checkType('hello world')).toBe('string')
  })

  test('判断数字', function() {
    expect(checkType(1111)).toBe('number')
  })
  
  test('判断数组', function() {
    expect(checkType([])).toBe('array')
  })

  test('判断本地存储', function() {
    expect(checkType(window.localStorage)).toBe('storage')
  })

  test('判断 null', function() {
    expect(checkType(null)).toBe('null')
  })
})
