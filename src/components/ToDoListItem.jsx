import { Button, Well } from 'react-bootstrap';
export default class ToDoListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	delete(itemId) {
		const itemRef = this.props.firebaseApp.database().ref(`/items/${itemId}`);
		itemRef.remove();
	}

	done(itemId) {
		console.log(this.props.id);
		const itemRef = this.props.firebaseApp.database().ref(`/items/${itemId}`);
		itemRef.update({
			isCompleted: true,
			finishedDate: new Date()
		});
	}

	render() {
		return (
			<div className={"todo-item " + (this.props.isCompleted? 'is-completed' : 'is-not-completed')}>
				<div className="row">
					<div className="col-2 word-breaker">{this.props.title}</div>
					<div className="col-4 word-breaker taj">{this.props.description}</div>
					<div className="col-2 text-center">{this.props.goalDate? new Date(this.props.goalDate).toLocaleString('ru') : 'Without goal date'}</div>
					<div className="col-2 text-center">{this.props.finishedDate? new Date(this.props.finishedDate).toLocaleString('ru') : 'Not finished yet'}</div>
					<div className="col-2 text-center">
						<div className={(this.props.isCompleted? '':'hidden')}>
							<Well><i className="material-icons">done</i></Well>
						</div>
						<div className={"btn-group btn-group-sm " + (this.props.isCompleted? 'hidden':'')}>
							<Button
								className="btn-success"
								onClick={() => this.done(this.props.id)}
							><i className="material-icons">done</i></Button>
							<Button
								className="btn-primary"
							><i className="material-icons">edit</i></Button>
							<Button
								className="btn-danger"
								onClick={() => this.delete(this.props.id)}
							><i className="material-icons">delete</i></Button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}