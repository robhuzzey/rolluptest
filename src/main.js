import { version } from '../package.json';
import { bar } from './foo.js';
import { App } from './App.jsx';
import ReactDOM from 'react-dom';

const message = `current version is ${version}`;

ReactDOM.render( <App />, document.getElementById('app') );