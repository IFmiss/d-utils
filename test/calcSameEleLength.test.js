const assert = require('assert')
const calcSameEleLength = require('./../src/lib/calcSameEleLength').default
describe('calcSameEleLength', function() {
  test('数字在数组中的数量为3', function() {
    const count = calcSameEleLength([1, 2, 3, 2, 11, 2, 3, 44, 3], 3)
    expect(count).toBe(3)
  })

  test('字符串数字数组中的数量应该为0', function() {
    const count = calcSameEleLength([1, 2, 3, 2, 11, 2, 3, 44, 3], '3')
    expect(count).toBe(0)
  })

  test('字母在字符串中存在的数量', function() {
    const count = calcSameEleLength('1231231412314', '3')
    expect(count).toBe(3)
  })

  test('空字符串判断', function() {
    const count = calcSameEleLength('      ', ' ')
    expect(count).toBe(6)
  })
})
