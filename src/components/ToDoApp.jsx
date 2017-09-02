import ToDoPanel from './ToDoPanel.jsx';
import ToDoList from './ToDoList.jsx';

/* Extra code */
/* Export component */
export default class ToDoApp extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-12">
						<ToDoPanel />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<ToDoList items={this.props.todos} />
					</div>
				</div>
			</div>
		);
	}
};