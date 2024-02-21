const express = require('express');
const app = express();

const port = 3001;

app.use((req, res, next) => {
	const dateNow = Date.now();
	console.log('Time:', dateNow);
	// res.send(`Time: ${dateNow}\n`);
	next();
});

app.use('/user/:id', (req, res, next) => {
	const reqMethod = req.method;
	console.log('Request Type:', reqMethod);
	// res.send(`Request Type: ${reqMethod}`);
	next();
});

app.use(
	'/user/:id',
	(req, res, next) => {
		console.log('Request URL:', req.originalUrl);
		next();
	},
	(req, res, next) => {
		console.log('Request Type:', req.method);
		next();
	}
);

app.get('/user/:id', (req, res, next) => {
	res.send('USER');
});

app.listen(port, () => {
	console.log('Server is listening on port:', port);
});
