"use strict";

import { moduleLists, createConfig } from './createConfig'

const config = moduleLists.map(item => createConfig(item.input, item.moduleType))

module.exports = config
