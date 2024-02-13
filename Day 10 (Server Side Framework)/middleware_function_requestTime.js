const express = require('express');
const app = express();

const requestTime = function (req, res, next) {
	req.requestTime = Date.now();
	next();
};

app.use(requestTime);

app.get('/', (req, res) => {
	let responsetText = 'Hello World!<br>';
	responsetText += `<small>Requested at: ${req.requestTime}</small>`;
	res.send(responsetText);
});

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
