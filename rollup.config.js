// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    { file: 'dist/nexus-notes.js', format: 'cjs', sourcemap: true },
    { file: 'dist/nexus-notes.esm.js', format: 'esm', sourcemap: true }
  ],
  plugins: [resolve(), commonjs(), terser()]
};
