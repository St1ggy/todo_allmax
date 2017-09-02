import _ from 'lodash';

import ToDoListItem from './ToDoListItem.jsx';

/* Extra code */

/* Export component */
export default class ToDoList extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-2"><b>Title</b></div>
					<div className="col-4"><b>Description</b></div>
					<div className="col-2"><b>Goal date</b></div>
					<div className="col-2"><b>Finished date</b></div>
				</div>
				<br/>
				{_.map(
					this.props.items,
					(item, index) =>
						<ToDoListItem key={index} {...item}/>
				)}
			</div>
		);
	}
};