/* Include Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './index.styl';

/* Include Libs */
import React from 'react';
import { render } from 'react-dom';
import Test from './test/test.jsx';

/* App */
render(
	<Test/>,
	document.getElementById('app')
)