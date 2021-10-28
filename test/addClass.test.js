const assert = require("assert");
const jsdom = require("jsdom");
const addClass = require("./../src/lib/addClass").default;

const { JSDOM } = jsdom;
const dom = new JSDOM(``, {
  url: "https://daiwei.site/",
  referrer: "https://daiwei.site/",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000,
});

const body = dom.window.document.body;

describe("addClass", function () {
  test("测试添加一个class 名称", function () {
    addClass(body, "test-class");
    assert.equal(body.className, "test-class");
  });

  test("添加一个相同的class", function () {
    addClass(body, "test-class");
    assert.equal(body.className, "test-class");
  });

  test("参数使用 class数组", function () {
    const prevLenth = body.className.split(" ").length;
    addClass(body, ["hello", "world", "d-utils"]);
    const afterLenth = body.className.split(" ").length;
    assert.equal(afterLenth - prevLenth, 3);
  });
});
