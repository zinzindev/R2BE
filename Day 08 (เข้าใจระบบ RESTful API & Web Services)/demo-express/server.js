const express = require('express');

const app = express();

// Method GET for Read
app.get('/', (req, res) => {
	res.send('Got a GET request');
});

app.get('/users', (req, res) => {
	res.send('Got a GET request at /users');
});

app.get('/users/:id', (req, res) => {
	res.send('Got a GET request at /users/:id');
});

// Method POST for Create
app.post('/', (req, res) => {
	res.send('Got a POST request');
});

// Method PUT for Update
app.put('/', (req, res) => {
	res.send('Got a PUT request');
});

// Method DELETE for Delete
app.delete('/', (req, res) => {
	res.send('Got a DELETE request');
});

app.listen(3000, () => console.log('Server ready on port 3000'));
