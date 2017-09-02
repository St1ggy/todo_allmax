import ToDoApp from './components/ToDoApp.jsx';
/* Extra code */
/* Export component */
export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		const { firebaseApp } = this.props;
		const itemsRef = firebaseApp.database().ref('items');
		itemsRef.on(
			'value',
			(snapshot) => {
				let items = snapshot.val();
				let newState = [];
				for(let item in items) {
					newState.push(items[item]);
				}
				this.setState({items: newState});
			}
		);
	}
	render() {
		let todos = this.state? this.state.items : null;
		return (
			<ToDoApp todos={todos} />
		);
	}
};