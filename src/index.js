/* Include Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './index.styl';

/* Include Core */
import React from 'react';
import { render } from 'react-dom';
/* Include Components */
import ToDoApp from './ToDoApp/ToDoApp.jsx';

/* App */
render(
	<div className="container">
		<ToDoApp />
	</div>,
	document.getElementById('app')
);