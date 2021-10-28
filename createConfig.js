"use strict";

import fs from "fs";
import path from "path";
import babel from "rollup-plugin-babel";
import clear from "rollup-plugin-clear";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import typescript2 from "rollup-plugin-typescript2";

import pkg from "./package.json";

export const LIB_DIR = path.join(__dirname, "./", "src/lib");

export const ENTRY_MODULE_MAP = fs
  .readdirSync(path.resolve(LIB_DIR))
  .reduce((prev, name) => {
    const stat = fs.statSync(`${LIB_DIR}/${name}`);
    if (name.includes(".d.ts")) return prev;
    if (stat.isDirectory()) {
      prev[`${name}/index`] = `${LIB_DIR}/${name}/index.ts`;
    } else {
      prev[`${name.replace(".ts", "")}`] = `${LIB_DIR}/${name}`;
    }
    return prev;
  }, {});

const HEADER_TEXT = `
/**
 * d-utils  version: ${pkg.version}
 * by ifmiss
 */
`;

const plugins = [
  clear({
    targets: ["dist"],
  }),
  json(),
  typescript2(),
  babel({
    exclude: "node_modules/**",
    runtimeHelpers: true,
  }),
  resolve({
    mainFields: "main",
    modulesOnly: true,
  }),
  commonjs({
    include: "node_modules/**",
    sourceMap: true,
    namedExports: {
      react: ["useState", "useEffect", "useMemo", "useCallBack", "useRef"],
      "react-router-dom": ["useLocation"],
    },
  }),
  terser({
    output: {
      comments: true,
    },
  }),
];

export const moduleLists = [
  {
    input: {
      index: "src/lib/index.ts",
      ...ENTRY_MODULE_MAP,
    },
    moduleType: "es",
  },
  {
    input: {
      index: "src/lib/index.ts",
    },
    moduleType: "umd",
  },
  {
    input: {
      index: "src/lib/index.ts",
      ...ENTRY_MODULE_MAP,
    },
    moduleType: "cjs",
  },
];

const external = ["sha1", "weixin-js-sdk"];

export const createConfig = (input, moduleType) => {
  return {
    input,
    output: {
      dir: path.resolve(__dirname, `dist/${moduleType}`),
      format: moduleType,
      banner: HEADER_TEXT,
      exports: "auto",
      name: "[name].js",
    },
    external,
    plugins,
  };
};
