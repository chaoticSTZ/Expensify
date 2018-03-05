import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyCJ5nOa24s8S7Ne0ML-iXNG0IlI01b4kqI',
	authDomain: 'expensify-f2722.firebaseapp.com',
	databaseURL: 'https://expensify-f2722.firebaseio.com',
	projectId: 'expensify-f2722',
	storageBucket: 'expensify-f2722.appspot.com',
	messagingSenderId: '771791621169'
};

firebase.initializeApp(config);

const database = firebase.database();

database
	.ref()
	.set({
		name: 'Joe Gallegos',
		age: 29,
		isSingle: true,
		location: {
			city: 'Dallas',
			country: 'United States'
		}
	})
	.then(() => {
		console.log('data is saved');
	})
	.catch((e) => {
		console.log('This failed', e);
	});

// database.ref().set('this is my data');

// database.ref('age').set(30);
// database.ref('location/city').set('Denver');

database
	.ref('attributes')
	.set({
		height: 69,
		weight: 190
	})
	.then(() => {
		console.log('the data is saved');
	})
	.catch((e) => {
		console.log('There was an error', e);
	});
