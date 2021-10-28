const assert = require("assert");
const base64Encode = require("./../src/lib/base64Encode").default;

describe("base64Encode", function () {
  test("正常字符串转码", function () {
    const str = base64Encode("hello d-utils");
    assert.equal(str, "aGVsbG8gZC11dGlscw==");
  });

  test("空格字符转base64", function () {
    const str = base64Encode(" ");
    assert.equal(str, "IA==");
  });

  test("base64字符转码", function () {
    const str = base64Encode("aGVsbG8gZC11dGlscw==");
    assert.equal(str, "YUdWc2JHOGdaQzExZEdsc2N3PT0=");
  });
});
