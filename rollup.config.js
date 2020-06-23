"use strict";

import path from 'path';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript2 from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json'

const HEADER_TEXT = `
/**
 * d-utils  version: ${pkg.version}
 * by ifmiss
 * /
`

const config = {
  input: {
    index: 'src/lib/index.ts',
  },
  output: [{
    dir:  path.resolve(__dirname,  'dist/cjs'),
    format: 'cjs',
    entryFileNames: '[name].js',
    banner: HEADER_TEXT,
  }, {
    dir:  path.resolve(__dirname,  'dist/es'),
    format: 'es',
    entryFileNames: '[name].js',
    banner: HEADER_TEXT,
  }],
  
  external: [
    'react',
    'react-router-dom',
    'sha1',
    'weixin-js-sdk'
  ],
  experimentalCodeSplitting: true,

  plugins: [
    clear({
      targets: ['dist']
    }),
    json(),
    typescript2(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    resolve({
      mainFields: 'main',
      modulesOnly: true
    }),
    commonjs({
      include: 'node_modules/**',
      sourceMap: true,
      namedExports: {
        react: [
          'useState',
          'useEffect',
          'useMemo',
          'useCallBack',
          'useRef'
        ],
        'react-router-dom': [
          'useLocation'
        ]
      }
    }),
    terser()
  ]
}

export default config