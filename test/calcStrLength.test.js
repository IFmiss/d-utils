const calcStrLength = require('./../src/lib/calcStrLength').default

describe('calcStrLength', function() {
  test('显示字符串长度', function() {
    const len = calcStrLength('test-calcStrLength')
    expect(len).toBe('test-calcStrLength'.length)
  })

  test('中文按照两个字符长度计算', function() {
    const len = calcStrLength('hello中国', true)
    expect(len).toBe(9)
  })

  test('特殊字符串测试 🌞', function() {
    const len = calcStrLength('🌞', true)
    expect(len).toBe(2)
  })
})
