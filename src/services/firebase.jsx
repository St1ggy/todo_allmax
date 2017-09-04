import firebase from 'firebase';
/* Extra code */
const firebaseApp = firebase.initializeApp({
	databaseURL: 'https://todolist-55f92.firebaseio.com/'
});

/* Export component */
export default firebaseApp;