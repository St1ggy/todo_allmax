import './ToDoApp.styl';

import { Component } from 'react';

import ToDoPanel from '../components/ToDoPanel/ToDoPanel.jsx';
import ToDoList from '../components/ToDoList/ToDoList.jsx';

class ToDoApp extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						<ToDoPanel />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<ToDoList />
					</div>
				</div>
			</div>
		);
	}
}
export default ToDoApp;