import { 
	Modal,
	Button,
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Col,
	InputGroup,
	ButtonToolbar,
	ToggleButtonGroup,
	ToggleButton,
	ListGroupItem,
} from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import firebaseApp from '../services/firebase.jsx';

export default class UpdateButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			title: props.title,
			description: props.description,
			priority: props.priority,
			goalDate: props.goalDate? new Date(props.goalDate).toLocaleString('ru') : null
		};
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	
	updateTask() {
		let tmpGoalDate = this.state.goalDate?
			new Date(this.state.goalDate.replace( /(\d+).(\d+).(\d+), (\d+):(\d+)/, "$2.$1.$3, $4:$5")).toISOString():
			false;
		const itemRef = firebaseApp.database().ref(`/items/${this.props.id}`);
		itemRef.update({
			title: this.state.title,
			description: this.state.description || null,
			priority: this.state.priority || 0,
			goalDate: tmpGoalDate
		});
		this.close();
	}

	render() {
		return (
			<Button
				bsStyle="info"
				onClick={this.open.bind(this)}
			><i className="material-icons">edit</i>
				<Modal
					show={this.state.showModal}
					onHide={this.close.bind(this)}
					animation={true}
					bsSize="lg"
				>
					<Modal.Header>
						<Modal.Title>Create Task</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>

							<FormGroup
								controlId="description"
							>
								<ControlLabel>Title</ControlLabel>
								<FormControl
									componentClass="input"
									type="text"
									value={this.state.title}
									placeholder="Enter title for new task"
									onChange={this.handleChange.bind(this)}
									name="title"
								/>
							</FormGroup>

							<FormGroup
								controlId="description"
							>
								<ControlLabel>Description</ControlLabel>
								<FormControl
									componentClass="textarea"
									rows={4}
									value={this.state.description}
									placeholder="Enter description for new task"
									onChange={this.handleChange.bind(this)}
									name="description"
								/>
							</FormGroup>
							<div className='row'>
								<FormGroup
									controlId="goalDate"
									bsClass="col-6"
								>
									<ControlLabel>Goal date</ControlLabel>
									<InputGroup>
										<MaskedFormControl
											mask="11.11.1111, 11:11"
											type="text"
											value={this.state.goalDate}
											placeholder="Enter goal date for new task"
											onChange={this.handleChange.bind(this)}
											name="goalDate"
										/>
										<InputGroup.Addon>dd.mm.yy hh:mm</InputGroup.Addon>
									</InputGroup>
								</FormGroup>
								
								<FormGroup
									controlId="priority"
									bsClass="col-6"
								>
									<ControlLabel>Priority</ControlLabel>
									<FormControl
										componentClass="select"
										placeholder="select"
										name="priority"
										onChange={this.handleChange.bind(this)}
										value={this.state.priority}
									>
										<option value={0}>Common</option>
										<option value={1}>Important</option>
										<option value={2}>Very important</option>
									</FormControl>
								</FormGroup>
							</div>

						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button
							bsStyle="danger"
							onClick={this.close.bind(this)}
						>
							Close
						</Button>
						<Button
							type="submit"
							bsStyle="success"
							onClick={this.updateTask.bind(this)}
						>
							Update
						</Button>
					</Modal.Footer>
				</Modal>
			</Button>
		)
	}
}