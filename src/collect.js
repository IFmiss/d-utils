const fs = require("fs");
const path = require("path");
const logStr = `/**
 * name: d-utils
 * version: v4
 * author: ifmiss
 */\n
`;
const ignoreName = ["index.ts", "type.ts", "global.d.ts"];
const url = path.join(__dirname, "lib");
const a = fs.readdirSync(url);
let str = logStr;

for (let v of a) {
  if (ignoreName.includes(v)) continue;
  const state = fs.statSync(path.resolve(url, v));
  const nameArr = v.split(".");
  const n = nameArr[0];
  const name = state.isDirectory() ? `./${v}/index` : `./${n}`;
  const defineName = state.isDirectory()
    ? `${n.charAt(0).toUpperCase() + n.slice(1)}`
    : `${n}`;
  const l = nameArr.length;
  if (l) {
    str += `export { default as ${defineName} } from '${name}';\n \n`;
  }
}

const indexUrl = path.resolve(url, "index.ts");
fs.writeFileSync(indexUrl, str);
