import { Button } from 'react-bootstrap';
export default class ToDoListItem extends React.Component {
	render() {
		return (
			<div className="todo-item">
				<div className="row">
					<div className="col-2 text-center">{this.props.title}</div>
					<div className="col-4">{this.props.description}</div>
					<div className="col-2 text-center">{this.props.goalDate}</div>
					<div className="col-2 text-center">{this.props.finishedDate}</div>
					<div className="col-2 text-center">
						<div className="btn-group btn-group-sm">
							<Button className="btn-success"><i className="material-icons">done</i></Button>
							<Button className="btn-primary"><i className="material-icons">edit</i></Button>
							<Button className="btn-danger"><i className="material-icons">delete</i></Button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}