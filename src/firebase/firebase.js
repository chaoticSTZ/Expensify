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

database.ref('expenses').push({
	description: 'Lunch',
	note: '',
	amount: '4500',
	createdAt: 'ksjdahbfksdf'
});

database.ref('expenses').push({
	description: 'Rent',
	note: 'March rent',
	amount: '$65000',
	createdAt: 'asdftrgh'
});

database.ref('expenses').push({
	description: 'gas',
	note: 'small amount of gas',
	amount: '$2500',
	createdAt: 'ergfntyj'
});

// database.ref('notes/-L6wPCn6-iASHHWnIdHm').remove();

// database.ref('notes').push({
// 	title: 'Course Topics',
// 	body: 'React Native, Angular'
// });

// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database
// 	.ref('location/city')
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e);
// 	});

// database
// 	.ref()
// 	.set({
// 		name: 'Joe Gallegos',
// 		age: 29,
// 		stressLevel: 6,
// 		job: {
// 			title: 'software developer',
// 			company: 'Google'
// 		},
// 		location: {
// 			city: 'Dallas',
// 			country: 'United States'
// 		}
// 	})
// 	.then(() => {
// 		console.log('data is saved');
// 	})
// 	.catch((e) => {
// 		console.log('This failed', e);
// 	});

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle'
// });

// database
// 	.ref()
// 	.remove()
// 	.then(() => {
// 		console.log('data was removed');
// 	})
// 	.catch((e) => {
// 		console.log('data not removed', e);
// 	});
