const assert = require('assert')
const base64Decode = require('./../dist/cjs/base64Decode')

describe('base64Decode', function() {
  test('base64转正常字符串', function() {
    const str = base64Decode('aGVsbG8gZC11dGlscw==')
    assert.equal(str, 'hello d-utils')
  })

  test('base64转空格字符', function() {
    const str = base64Decode('IA==')
    assert.equal(str, ' ')
  })

  test('base64字符转码', function() {
    const str = base64Decode('YUdWc2JHOGdaQzExZEdsc2N3PT0=')
    assert.equal(str, 'aGVsbG8gZC11dGlscw==')
  })
})
