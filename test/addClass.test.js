const assert = require('assert')
const jsdom = require("jsdom");
const addClass = require('./../src/lib/addClass')
const { JSDOM } = jsdom;
const dom = new JSDOM(``, {
  url: "https://daiwei.site/",
  referrer: "https://daiwei.site/",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000
});

const body = dom.window.document.body

describe('addClass', function() {
  it('should return -1 when the value is not present', function() {
    // assert.equal([1, 2, 3].indexOf(4), -1)
    addClass(body, 'test-class')
  })
})