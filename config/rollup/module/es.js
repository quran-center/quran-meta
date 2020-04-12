import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import banner from '../../banner';

import { DIST_MODULE_ES, SRC } from '../../const';

export default {
  input: `${SRC}/index.js`,
  plugins: [babel(),json()],
  output: {
    file: `${DIST_MODULE_ES}/index.js`,
    format: 'es',
    name: 'quranMeta',
    sourcemap: false,
    banner: banner,
  },
};
