import ToDoApp from './components/ToDoApp.jsx';
/* Extra code */
class ToDoItem {
	constructor (
		title,
		description,
		priority,
		expectedDate,
		goalDate,
		isCompleted,
	) {
		this.title				= title;
		this.description	= description;
		this.priority			= priority;
		this.expectedDate	= expectedDate;
		this.goalDate	= goalDate;
		this.isCompleted	= isCompleted;
	}
}
const todos = [
	new ToDoItem('test', 'test_desc', 3, new Date(), new Date()),
	new ToDoItem('test2', 'test_desc2', 3, new Date(), new Date()),
];
/* Export component */
export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos
		}
	}
	render() {
		return (
			<div>
				<ToDoApp todos={this.state.todos} />
			</div>
		);
	}
};