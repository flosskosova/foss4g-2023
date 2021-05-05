// rollup.config.js
import scss from 'rollup-plugin-scss';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/main.js',
  output: {
    file: 'static/dist/main.js',
    format: 'iife',
// 		sourcemap: true
  },
  plugins: [
    scss({
// 		output: true,
		output: 'static/dist/styles.css',
	}),
	resolve(),
	terser(),
  ]
}



