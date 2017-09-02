export default class ToDoListItem extends React.Component {
	render() {
		return (
			<div className="todo-item">
				<div className="row">
					<div className="col-2">{this.props.title}</div>
					<div className="col-4">{this.props.description}</div>
					<div className="col-2">{this.props.expectedDate.toString()}</div>
					<div className="col-2">{this.props.goalDate.toString()}</div>
					<div className="col-2">
						<div className="btn-group">
							<button type="button" className="btn btn-primary"><i className="material-icons">edit</i></button>
							<button type="button" className="btn btn-danger"><i className="material-icons">delete</i></button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}