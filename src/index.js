/* Include Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './index.styl';

/* Include Core */
import React from 'react';
import { render } from 'react-dom';
import firebase from 'firebase';
import { connect, Provider } from 'react-firebase';

/* Include Components */
import App from './App.jsx';

/* App */
const firebaseApp = firebase.initializeApp({
	databaseURL: 'https://todolist-55f92.firebaseio.com/'
});

render(
	<Provider firebaseApp={firebaseApp}>
		<div className="container">
			<App />
		</div>
	</Provider>,
	document.getElementById('app')
);