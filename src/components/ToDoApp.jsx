import ItemCreate from './ItemCreate.jsx';
import ToDoList from './ToDoList.jsx';

/* Extra code */
/* Export component */
export default class ToDoApp extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<ItemCreate firebaseApp={this.props.firebaseApp} />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<ToDoList items={this.props.todos} firebaseApp={this.props.firebaseApp} />
					</div>
				</div>
			</div>
		);
	}
};