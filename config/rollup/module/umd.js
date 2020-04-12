import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import banner from '../../banner';

import { DIST_MODULE_CJS, SRC } from '../../const';

export default {
  input: `${SRC}/index.js`,
  plugins: [babel(),json()],
  output: {
    file: `${DIST_MODULE_CJS}/index.js`,
    format: 'umd',
    name: 'quranMeta',
    sourcemap: false,
    banner: banner,
  },
};
