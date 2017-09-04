import { Button, Well, ListGroupItem } from 'react-bootstrap';
import firebaseApp from '../services/firebase.jsx';
import UpdateButton from './UpdateButton.jsx'

export default class ToDoListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			priority: {
				0: null,
				1: 'success',
				2: 'warning'
			},
			now: new Date(),
			expired: false
		};
		this.goalDate = this.props.goalDate;
		this.updateTime();
		setInterval(this.updateTime.bind(this), 1000);
	}
	/** Понимаю, что немного неправильно, валятся ворнинги в консоль,
		* но другого нормального решения для того, что мне нужно, не нашел
		*/
	updateTime() {
		this.setState({
			now: new Date(),
			expired: this.props.goalDate && (this.state.now > new Date(this.props.goalDate))
		});
	}

	delete(itemId) {
		const itemRef = firebaseApp.database().ref(`/items/${itemId}`);
		itemRef.remove();
	}

	done(itemId) {
		const itemRef = firebaseApp.database().ref(`/items/${itemId}`);
		itemRef.update({
			isCompleted: true,
			finishedDate: new Date()
		});
	}

	render() {
		return (
			<ListGroupItem
				bsStyle={this.state.expired? 'danger' : this.state.priority[this.props.priority]}
				className={"todo-item " + (this.props.isCompleted? 'is-completed' : 'is-not-completed')}
			>
				<div className="col-2 word-breaker">{this.props.title}</div>
				<div className="col-4 word-breaker taj">{this.props.description}</div>
				<div className="col-2 text-center">{this.props.goalDate? new Date(this.props.goalDate).toLocaleString('ru') : 'Without goal date'}</div>
				<div className="col-2 text-center">{this.props.finishedDate? new Date(this.props.finishedDate).toLocaleString('ru') : 'Not finished yet'}</div>
				<div className="col-2 text-center">
					<div className={(this.props.isCompleted? '':'hidden')}>
						<Well><i className="material-icons">done</i></Well>
						<i className="material-icons extra-delete" onClick={() => this.delete(this.props.id)}>delete</i>
					</div>
					<div className={"btn-group btn-group-sm " + (this.props.isCompleted? 'hidden':'')}>
						<Button
							bsStyle="success"
							onClick={() => this.done(this.props.id)}
						><i className="material-icons">done</i></Button>
						<UpdateButton {...this.props} />
						<Button
							bsStyle="danger"
							onClick={() => this.delete(this.props.id)}
						><i className="material-icons">delete</i></Button>
					</div>
				</div>
			</ListGroupItem>
		)
	}
}