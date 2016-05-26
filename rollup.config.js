import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  format: 'iife',
  plugins: [ json(), babel() ],
  dest: 'dist/bundle.js',
  sourceMap: true,
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};