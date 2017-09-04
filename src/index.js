/* Include Libs */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'normalize.css';
import './index.styl';

/* Include Core */
import React from 'react';
import { render } from 'react-dom';

/* Include Components */
import App from './App.jsx';

/* App */
render(
	<App />,
	document.getElementById('app')
);