// rollup.config.js

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import {
    chromeExtension,
    simpleReloader,
} from 'rollup-plugin-chrome-extension'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    input: 'src/manifest.json',
    output: {
        dir: 'dist',
        format: 'esm',
    },
    plugins: [
        // always put chromeExtension() before other plugins
        chromeExtension(),
        simpleReloader(),
        resolve(),
        commonjs(),
    ]
}