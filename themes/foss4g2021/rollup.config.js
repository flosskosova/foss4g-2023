// rollup.config.js
import scss from 'rollup-plugin-scss';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/main.js',
  output: {
    file: '../../static/js/main.js',
    format: 'iife',
// 		sourcemap: true
  },
  plugins: [
    scss({
// 		output: true,
		output: '../../static/dist/main.min.css',
    outputStyle: "compressed",
	}),
	resolve(),
	terser(),
  ]
}



