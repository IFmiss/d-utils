"use strict";

import { createConfig, moduleLists } from "./createConfig";

const config = moduleLists.map((item) =>
  createConfig(item.input, item.moduleType)
);

module.exports = config;
