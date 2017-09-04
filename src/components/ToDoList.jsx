import _ from 'lodash';

import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import ToDoListItem from './ToDoListItem.jsx';
import ItemCreate from './ItemCreate.jsx'

/* Extra code */
/* Export component */
export default class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { priority: null };
	}
	filterItems(priority) {
		this.setState({ priority: priority });
	}

	render() {
		return (
			<div>
				<ListGroup>
					<ListGroupItem bsStyle="info">
						<div className="col-2"><b>Title</b></div>
						<div className="col-4"><b>Description</b></div>
						<div className="col-2 text-center"><b>Goal date</b></div>
						<div className="col-2 text-center"><b>Finished date</b></div>
						<div className="col-2 text-center">
							<div className={"btn-group btn-group-sm " + (this.props.isCompleted? 'hidden':'')}>
								<Button
									onClick={() => this.filterItems(0)}
									bsStyle="primary"
								>0</Button>
								<Button
									onClick={() => this.filterItems(1)}
									bsStyle="success"
								>1</Button>
								<Button
									onClick={() => this.filterItems(2)}
									bsStyle="warning"
								>2</Button>
								<Button
									onClick={() => this.filterItems(null)}
									bsStyle="info"
								>All</Button>
							</div>
						</div>
					</ListGroupItem>
					<ItemCreate />
					<ListGroupItem className={this.props.items && this.props.items.length? 'hidden' : ''}>
						<div className="col-12 text-center">
							<h3>There are no tasks at the moment</h3>
						</div>
					</ListGroupItem>
					<div className="items-container">
					{_.map(
						this.props.items,
						(item, index) => {
							if((this.state.priority == null || item.priority == this.state.priority) &&!item.isCompleted) return (<ToDoListItem key={index} {...item}/>)
						}
					)}
					{_.map(
						this.props.items,
						(item, index) => {
							if(item.isCompleted) return (<ToDoListItem key={index} {...item}/>)
						}
					)}
					</div>
				</ListGroup>
			</div>
		);
	}
};