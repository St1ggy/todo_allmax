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
					<div className="col-2 text-center"><b>Goal date</b></div>
					<div className="col-2 text-center"><b>Finished date</b></div>
				</div>
				<br/>
				<div className={"row "+(this.props.items && this.props.items.length? 'hidden' : '')}>
					<div className="col-12 text-center">
						<h3>There are no tasks at the moment</h3>
					</div>
				</div>
				{_.map(
					this.props.items,
					(item, index) => {
						if(!item.isCompleted) return (<ToDoListItem key={index} firebaseApp={this.props.firebaseApp} {...item}/>)
					}
				)}
				{_.map(
					this.props.items,
					(item, index) => {
						if(item.isCompleted) return (<ToDoListItem key={index} firebaseApp={this.props.firebaseApp} {...item}/>)
					}
				)}
			</div>
		);
	}
};