import { Modal, Button } from 'react-bootstrap';

export default class ItemCreate extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showModal: false };
	}

	close() {
		this.setState({ showModal: false });
	}
	open() {
		this.setState({ showModal: true });
	}

	render() {
		return (
			<div>
				<Button
					bsStyle="warning"
					onClick={this.open.bind(this)}
				>
					<i className="material-icons">
						note_add
					</i>
				</Button>
				<Modal
					show={this.state.showModal}
					onHide={this.close.bind(this)}
					animation={true}
				>
					<Modal.Header closeButton>
						<Modal.Title>Create Task</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						123
					</Modal.Body>
					<Modal.Footer>
						<Button
							bsStyle="danger"
							onClick={this.close.bind(this)}
						>
							Close
						</Button>
						<Button
							bsStyle="success"
							onClick={this.close.bind(this)}
						>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}